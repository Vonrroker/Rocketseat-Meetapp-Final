import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { withNavigationFocus } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, ListMeetups } from './styles';

import Background from '~/components/Background';
import Header from '~/components/Header';
import Meetup from '~/components/Meetup';

import {
  meetupSubscriptionsRequest,
  meetupUnsubscribeRequest,
} from '~/store/modules/meetup/actions';

function Subscriptions({ isFocused }) {
  const subscriptions = useSelector(state => state.meetup.subscriptions);

  const dispatch = useDispatch();
  useEffect(() => {
    if (isFocused) {
      dispatch(meetupSubscriptionsRequest());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFocused]);

  async function handleUnsubscribe(id) {
    dispatch(meetupUnsubscribeRequest(id));
  }

  return (
    <Background>
      <Container>
        <Header />

        <ListMeetups
          data={subscriptions}
          keyExtractor={item => String(item.id)}
          onEndReachedThreshold={0.2} // Carrega mais itens quando chegar em 20% do fim
          onEndReached={() => {}} // Função que carrega mais itens
          renderItem={({ item }) => (
            <Meetup
              meetup={item.meetup}
              subscribed
              onPress={() => handleUnsubscribe(item.id)}
            />
          )}
        />
      </Container>
    </Background>
  );
}

Subscriptions.navigationOptions = {
  tabBarLabel: 'Inscrições',
  // eslint-disable-next-line react/prop-types
  tabBarIcon: ({ tintColor }) => (
    <Icon name="local-offer" size={20} color={tintColor} />
  ),
};

Subscriptions.propTypes = {
  isFocused: PropTypes.bool.isRequired,
};

export default withNavigationFocus(Subscriptions);
