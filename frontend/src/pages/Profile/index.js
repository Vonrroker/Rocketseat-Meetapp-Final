import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { Container } from './styles';
import { userUpdateRequest } from '~/store/modules/user/actions';

const schema = Yup.object().shape({
  name: Yup.string(),
  email: Yup.string().email('Insira um email válido.'),
  oldPassword: Yup.string().when('password', (password, field) =>
    password
      ? field.required('Insira sua senha atual para alterar a senha')
      : field
  ),
  password: Yup.string(),
  confirmPassword: Yup.string().when('password', (password, field) =>
    password
      ? field
          .required('Repita sua senha')
          .oneOf([Yup.ref('password')], 'Senhas diferentes')
      : field
  ),
});

export default function Profile() {
  const user = useSelector(state => state.user);

  const dispatch = useDispatch();

  function handleSumit(params) {
    dispatch(userUpdateRequest(params));
  }

  return (
    <Container>
      <Form initialData={user} schema={schema} onSubmit={handleSumit}>
        <Input name="name" placeholder="Seu nome" />
        <Input name="email" placeholder="Seu email" />
        <p />
        <Input type="password" name="oldPassword" placeholder="Senha atual" />
        <Input type="password" name="password" placeholder="Nova senha" />
        <Input
          type="password"
          name="confirmPassword"
          placeholder="Confirmação de senha"
        />
        <div>
          <button type="submit">Salvar perfil</button>
        </div>
      </Form>
    </Container>
  );
}
