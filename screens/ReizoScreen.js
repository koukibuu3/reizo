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
import Modal from 'react-native-modal';

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
      isModalVisible: false,
    };
  }

  _toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };

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

  _onDelete = itemKey => {
    firebase
      .firestore()
      .collection('reizoes')
      .doc(itemKey)
      .delete()
      .then(() => {
        console.log('successfully deleted!');
      })
      .catch(error => {
        console.log(error);
      });
    // console.log(key);
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
            <Button transparent onPress={this._toggleModal}>
              <Icon name="add" />
            </Button>
          </Right>
        </Header>

        <Modal isVisible={this.state.isModalVisible}>
          <View style={styles.modal}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalHeaderText} onPress={this._toggleModal}>
                閉じる
              </Text>
            </View>
            <View style={styles.modalBody}>
              <ReizoInput
                onSubmit={this._onSubmit}
                toggleModal={this._toggleModal}
              />
            </View>
          </View>
        </Modal>

        <Content>
          <List>
            <FlatList
              data={reizoes}
              renderItem={({item}) => (
                <ReizoItem
                  onDelete={this._onDelete}
                  itemKey={item.key}
                  {...item}
                />
              )}
            />
          </List>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  modalHeader: {
    flex: 1,
    paddingTop: 10,
    height: 20,
  },
  modalHeaderText: {
    textAlign: 'left',
    color: '#7f8c8d',
  },
  modalBody: {
    flex: 4,
    alignItems: 'center',
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 120,
  },
});
