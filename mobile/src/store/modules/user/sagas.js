import { all, takeLatest, call, put } from 'redux-saga/effects';
import { Alert } from 'react-native';
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

    Alert.alert('Perfil atualizado com sucesso');
    yield put(userUpdateSuccess(response.data));
  } catch (error) {
    Alert.alert(
      'Falha ao atualizar perfil',
      'Verique se seus dados estão corretos'
    );
  }
}

export default all([takeLatest('@user/UPDATE_REQUEST', userUpdate)]);
