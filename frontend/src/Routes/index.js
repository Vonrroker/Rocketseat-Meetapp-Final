import React from 'react';
import { Switch } from 'react-router-dom';
import SignIn from '../pages/SignIn';
import Meetups from '../pages/Meetups';
import Profile from '../pages/Profile';
import SignUp from '../pages/SignUp';
import Route from './Route';
import Details from '~/pages/Meetups/Details';
import MeetupForm from '~/pages/Meetups/MeetupForm';
import Editar from '~/pages/Meetups/Editar';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/meetups" exact component={Meetups} isPrivate />
      <Route path="/meetups/:id/edit" component={Editar} isPrivate />
      <Route path="/meetups/new" component={MeetupForm} isPrivate />
      <Route path="/meetups/:id" component={Details} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/register" component={SignUp} />
    </Switch>
  );
}
