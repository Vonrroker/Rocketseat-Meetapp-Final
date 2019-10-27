import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import PropTypes from 'prop-types';
import * as Yup from 'yup';

import { Container } from './styles';
import BannerInput from './BannerInput';
import {
  meetupCreateRequest,
  meetupUpdateRequest,
} from '~/store/modules/meetup/actions';
import DatePicker from './DatePicker';

const schema = Yup.object().shape({
  banner_id: Yup.number().required('Banner obrigatório'),
  title: Yup.string().required('O meetup precisa ter um título.'),
  description: Yup.string().required('O meetup precisa ter uma descrição'),
  date: Yup.date('Data inválida').required('O meetup precisa ter uma data.'),
  locale: Yup.string().required('O meetup precisa ter um local'),
});

export default function MeetupForm({ initial, edit }) {
  const dispatch = useDispatch();

  function handleSubmit(data) {
    if (edit) {
      dispatch(meetupUpdateRequest({ ...data, id: initial.id }));
    } else {
      dispatch(meetupCreateRequest(data));
    }
  }

  return (
    <Container>
      <Form
        initialData={initial}
        schema={schema}
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <BannerInput name="banner_id" />
        <Input name="title" placeholder="Titulo do meetup" />
        <Input multiline name="description" placeholder="Titulo do meetup" />
        <DatePicker name="date" />
        <Input name="locale" placeholder="Localização" />
        <div className="buttonSubmit">
          <button type="submit">Salvar Meetup</button>
        </div>
      </Form>
    </Container>
  );
}

MeetupForm.propTypes = {
  initial: PropTypes.shape(),
  edit: PropTypes.bool,
};

MeetupForm.defaultProps = {
  initial: {},
  edit: false,
};
