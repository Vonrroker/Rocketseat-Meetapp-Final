import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const ListMeetups = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin: 30px 20px 0;
`;
