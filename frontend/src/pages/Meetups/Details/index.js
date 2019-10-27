import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { Container, HeaderMeetups, Banner, InfoMeetup } from './styles';
import { meetupDeleteRequest } from '~/store/modules/meetup/actions';
import history from '~/services/history';

export default function Details({ match }) {
  const { id } = match.params;
  const dispatch = useDispatch();
  const meetup = useSelector(state =>
    state.meetup.meetups.find(m => String(m.id) === id)
  );

  function handleDelete() {
    dispatch(meetupDeleteRequest(id));
  }

  function handleEdit() {
    history.push(`/meetups/${id}/edit`);
  }

  return (
    <Container>
      <HeaderMeetups>
        <span>{meetup.title}</span>
        <div>
          <button type="button" className="editar" onClick={handleEdit}>
            Editar
          </button>
          <button type="button" className="cancelar" onClick={handleDelete}>
            Cancelar
          </button>
        </div>
      </HeaderMeetups>
      <Banner>
        <img src={meetup.file.url} alt="banner" />
      </Banner>
      <InfoMeetup>
        <span>{meetup.description}</span>
        <nav>
          <h1>{meetup.formatedDate}</h1>
          <h1>{meetup.locale}</h1>
        </nav>
      </InfoMeetup>
    </Container>
  );
}

Details.propTypes = {
  match: PropTypes.shape().isRequired,
};
