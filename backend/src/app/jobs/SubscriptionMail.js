import { format, parseISO } from 'date-fns';
import { pt } from 'date-fns/locale';
import Mail from '../../lib/Mail';

class SubscriptionMail {
  get key() {
    return 'SubscriptionMail';
  }

  async handle({ data }) {
    const { meetup, subscription } = data;

    await Mail.sendMail({
      to: `${meetup.user.name} <${meetup.user.email}>`,
      subject: 'Aviso de Inscrição em meetup',
      template: 'subscribe',
      context: {
        user_owner: meetup.user.name,
        user_sub: subscription.user.name,
        email_sub: subscription.user.email,
        locale_meetup: meetup.locale,
        date_meetup: format(
          parseISO(meetup.date),
          "dd 'de' MMMM', às' HH:mm'h'",
          {
            locale: pt,
          }
        ),
      },
    });
  }
}

export default new SubscriptionMail();
