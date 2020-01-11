import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
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

import firebase from 'react-native-firebase';

import ReizoInput from '../components/ReizoInput';
import ReizoItem from '../components/ReizoItem';

export default class ListScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
    };
  }

  _onPress = text => {
    const list = [].concat(this.state.list);

    list.push({
      key: Date.now(),
      text: text,
      done: false,
    });

    this.setState({
      list,
    });
  };

  render() {
    const {list} = this.state;
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
              <Icon name="add" />
            </Button>
          </Right>
        </Header>

        <Content>
          <View style={styles.container}>
            <View style={styles.main}>
              <ReizoInput onPress={this._onPress} />
            </View>
          </View>
          <List>
            <FlatList
              data={list}
              renderItem={({item}) => <ReizoItem {...item} />}
            />
          </List>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
  },
  main: {
    flex: 1,
    maxWidth: 400,
    alignItems: 'center',
  },
  reizoListContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  reizoList: {
    paddingLeft: 10,
    paddingRight: 10,
  },
});
