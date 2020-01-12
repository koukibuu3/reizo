import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Body, Right, Icon, ListItem} from 'native-base';
import moment from 'moment';

import firebase from 'react-native-firebase';

const ReizoItem = props => {
  const {name, expirationDate} = props;
  const nowTimestamp = firebase.firestore.FieldValue.serverTimestamp();
  const expirationTimestamp = new Date(expirationDate.seconds * 1000);

  let expiration = {
    message: '',
    style: '',
  };

  const diff = moment(expirationTimestamp).diff(nowTimestamp, 'days');
  if (diff === 0) {
    expiration.message = '賞味期限当日';
    expiration.style = {color: '#c0392b'};
  } else if (diff < 0) {
    expiration.message = '賞味期限切れ( ' + Math.abs(diff) + ' 日 )';
    expiration.style = {color: '#95a5a6'};
  } else if (diff < 3) {
    expiration.message = 'あと ' + diff + ' 日';
    expiration.style = {color: '#e67e22'};
  } else {
    expiration.message = 'あと ' + diff + ' 日';
    expiration.style = {color: '#000'};
  }

  return (
    <ListItem icon>
      <Body>
        <Text>{name}</Text>
      </Body>
      <Right>
        <Text style={expiration.style}>{expiration.message}</Text>
        <Icon name="arrow-forward" />
      </Right>
    </ListItem>
  );
};

export default ReizoItem;
