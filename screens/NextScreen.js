import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Container, Header, Body, Title} from 'native-base';

class NextScreen extends React.Component {
  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Reizo</Title>
          </Body>
        </Header>
        <View style={styles.body}>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>This page is Next.</Text>
          </View>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
});

export default NextScreen;
