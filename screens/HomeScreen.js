import React from 'react';
import {View, Text, Image} from 'react-native';

import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Content,
} from 'native-base';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            {/* <Button transparent>
              <Icon name="arrow-back" />
            </Button> */}
          </Left>
          <Body>
            <Title>ホーム</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="settings" />
            </Button>
          </Right>
        </Header>
        <Content>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', padding: 100}} >
            <Image
              source={require('../assets/reizo-kun.jpg')}
              style={{ width: 300, height: 300 }}
            />
          </View>
        </Content>
      </Container>
    );
  }
}
