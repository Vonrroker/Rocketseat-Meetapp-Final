import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { parseISO } from 'date-fns';
import MeetupForm from '../MeetupForm';

export default function Editar({ match }) {
  const { id } = match.params;
  const initial = useSelector(state =>
    state.meetup.meetups.find(m => String(m.id) === id)
  );

  return (
    <MeetupForm initial={{ ...initial, date: parseISO(initial.date) }} edit />
  );
}

Editar.propTypes = {
  match: PropTypes.shape().isRequired,
};
