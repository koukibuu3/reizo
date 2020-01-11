import React from 'react';
import {View, Text} from 'react-native';

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
  List,
  ListItem,
} from 'native-base';

export default class ListScreen extends React.Component {
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
            <Title>リスト</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="settings" />
            </Button>
          </Right>
        </Header>

        <Content>
          <List>
            <ListItem icon>
              <Body>
                <Text>納豆</Text>
              </Body>
              <Right>
                <Text>２週間前</Text>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem icon>
              <Body>
                <Text>牛乳</Text>
              </Body>
              <Right>
                <Text>あと3日</Text>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem icon>
              <Body>
                <Text>黒毛和牛サーロイン 200g</Text>
              </Body>
              <Right>
                <Text>賞味期限当日</Text>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
