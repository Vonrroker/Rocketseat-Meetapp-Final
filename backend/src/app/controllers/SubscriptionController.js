import { isBefore } from 'date-fns';
import { Op } from 'sequelize';
import Subscription from '../models/Subscription';
import Meetup from '../models/Meetup';
import User from '../models/User';
import File from '../models/File';

import Queue from '../../lib/Queue';
import SubscriptionMail from '../jobs/SubscriptionMail';

class SubscriptionController {
  async index(req, res) {
    const subscriptions = await Subscription.findAll({
      where: {
        user_id: req.userId,
      },
      include: [
        {
          model: Meetup,
          as: 'meetup',
          where: {
            date: {
              [Op.gt]: new Date(),
            },
          },
          include: [
            {
              model: User,
              as: 'user',
              attributes: ['id', 'name', 'email'],
            },
            {
              model: File,
              as: 'file',
            },
          ],
        },
      ],
      order: [[{ model: Meetup, as: 'meetup' }, 'date']],
    });
    return res.json(subscriptions);
  }

  async store(req, res) {
    const { id } = req.params;
    const meetup = await Meetup.findByPk(id, {
      include: [
        {
          model: User,
          as: 'user',
          attributes: ['name', 'email'],
        },
      ],
    });

    if (!meetup) {
      return res
        .status(400)
        .json({ error: `Doesn't exists meetup with id ${id}` });
    }

    if (isBefore(meetup.date, new Date())) {
      return res.status(400).json({ error: 'Meetup already passed' });
    }

    const meetupsSubs = await Subscription.findOne({
      where: {
        user_id: req.userId,
        meetup_id: id,
      },
    });

    if (meetupsSubs) {
      return res
        .status(400)
        .json({ error: 'You already subscribed in this meetup' });
    }

    const subSameHour = await Subscription.findOne({
      where: { user_id: req.userId },
      include: [
        {
          model: Meetup,
          as: 'meetup',
          where: { date: meetup.date },
        },
      ],
    });

    if (subSameHour) {
      return res.status(400).json({
        error: 'You are already registered for a meetup at this time.',
      });
    }

    const subscription = await Subscription.create({
      user_id: req.userId,
      meetup_id: id,
    });

    await subscription.reload({
      include: [
        {
          model: User,
          as: 'user',
          attributes: ['name', 'email'],
        },
      ],
    });

    await Queue.add(SubscriptionMail.key, { meetup, subscription });

    return res.json({ subscription });
  }

  async delete(req, res) {
    const subscription = await Subscription.findByPk(req.params.id);

    if (subscription && subscription.user_id !== req.userId) {
      return res.status(401).json({ error: 'Permission denied.' });
    }

    await subscription.destroy();

    return res.json('ok');
  }
}

export default new SubscriptionController();
