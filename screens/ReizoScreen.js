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
    this.ref = firebase.firestore().collection('reizoes');
    this.unsubscribe = null;

    this.state = {
      reizoes: [],
    };
  }

  componentDidMount() {
    // refの更新時イベントにonCollectionUpdateを登録
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
  }

  compoentWillunmount() {
    this.unsubscribe();
  }

  _onSubmit = reizo => {
    const reizoes = [];

    reizoes.push({
      name: reizo.name,
      creation_date: new Date(),
      expiration_date: reizo.expirationDate,
    });

    reizoes.forEach(reizo => {
      this.ref.add(reizo);
    });

    // onCollectionUpdateが呼ばれるので、ここではstateに渡さない
  };
  /**
   * Firestoreのコレクションが更新されたときのイベント
   */
  onCollectionUpdate = querySnapshot => {
    // docsのdataからreizoesを取得
    const reizoes = [];
    querySnapshot.forEach(doc => {
      const {name, creation_date, expiration_date} = doc.data();
      reizoes.push({
        key: doc.id,
        name: name,
        creationDate: creation_date,
        expirationDate: expiration_date,
      });
    });

    this.setState({
      reizoes,
    });
  };

  render() {
    const {reizoes} = this.state;
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
              <ReizoInput onSubmit={this._onSubmit} />
            </View>
          </View>
          <List>
            <FlatList
              data={reizoes}
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
