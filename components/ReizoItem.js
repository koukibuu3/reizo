import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Body, Right, Icon, ListItem} from 'native-base';

const ReizoItem = props => {
  const {text} = props;
  return (
    <ListItem icon>
      <Body>
        <Text>{text}</Text>
      </Body>
      <Right>
        <Text>２週間前</Text>
        <Icon name="arrow-forward" />
      </Right>
    </ListItem>
  );
};

export default ReizoItem;
