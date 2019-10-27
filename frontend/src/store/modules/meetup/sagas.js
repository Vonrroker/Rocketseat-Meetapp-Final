import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import {
  meetupSuccess,
  meetupCreateSuccess,
  meetupDeleteSuccess,
  meetupUpdateSuccess,
} from './actions';
import history from '~/services/history';

function* meetup() {
  try {
    const response = yield call(api.get, 'organizing');

    yield put(meetupSuccess(response.data));
  } catch (error) {
    toast.error('falha ao requisitar meetups');
  }
}

function* createMeetup({ payload }) {
  try {
    const response = yield call(api.post, 'meetups', { ...payload });

    const { data } = response;
    yield put(meetupCreateSuccess(data));
    toast.success('Meetup criado com sucesso');
    history.push(`/meetups/${data.id}`);
  } catch (error) {
    toast.error('Falha ao criar meetup');
  }
}

function* deleteMeetup({ payload }) {
  try {
    const { id } = payload;
    yield call(api.delete, `meetups/${id}`);

    history.push('/meetups');

    yield put(meetupDeleteSuccess(id));

    toast.success('Meetup cancelado com sucesso');
  } catch (error) {
    toast.error('Falha ao deletar meetup');
  }
}

function* updateMeetup({ payload }) {
  try {
    const { id, ...rest } = payload.meetup;
    const response = yield call(api.put, `meetups/${id}`, rest);

    const { data } = response;
    yield put(meetupUpdateSuccess(data));
    toast.success('Meetup atualizado com sucesso');
    history.push(`/meetups/${data.id}`);
  } catch (error) {
    toast.error('Falha ao criar meetup');
  }
}

export default all([
  takeLatest('@meetup/REQUEST', meetup),
  takeLatest('@meetup/CREATE_REQUEST', createMeetup),
  takeLatest('@meetup/DELETE_REQUEST', deleteMeetup),
  takeLatest('@meetup/UPDATE_REQUEST', updateMeetup),
]);
