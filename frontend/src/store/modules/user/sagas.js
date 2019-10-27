import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import { userUpdateSuccess } from './actions';

function* userUpdate({ payload }) {
  try {
    const { name, email, ...rest } = payload.user;

    const profile = {
      name,
      email,
      ...(rest.oldPassword ? rest : {}),
    };
    const response = yield call(api.put, 'users', profile);

    toast.success('Perfil atualizado com sucesso');
    yield put(userUpdateSuccess(response.data));
  } catch (error) {
    toast.error('Falha ao atualizar perfil, verifique seus dados');
  }
}

export default all([takeLatest('@user/UPDATE_REQUEST', userUpdate)]);
