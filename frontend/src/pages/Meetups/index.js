import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Container, ListMeetups, HeaderMeetups } from './styles';
import { meetupRequest } from '~/store/modules/meetup/actions';

export default function Meetups() {
  const dispatch = useDispatch();
  const meetups = useSelector(state => state.meetup.meetups);

  useEffect(() => {
    dispatch(meetupRequest());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <HeaderMeetups>
        <span>Meus meetups</span>
        <Link to="/meetups/new">
          <button type="button">Novo meetup</button>
        </Link>
      </HeaderMeetups>
      <ListMeetups>
        {meetups.map(meetup => (
          <Link to={`/meetups/${meetup.id}`} key={meetup.id}>
            <div>
              <strong>{meetup.title}</strong>
              <span>{meetup.formatedDate}</span>
            </div>
          </Link>
        ))}
      </ListMeetups>
    </Container>
  );
}
