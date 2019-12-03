import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Container, Header, Body, Button, Icon, Title, Fab} from 'native-base';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }
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
            <Text style={styles.sectionTitle}>This page is Home.</Text>
          </View>
        </View>
        {/* TODO いずれcomponents化する */}
        <View style={{flex: 1}}>
          <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{}}
            style={{backgroundColor: '#5067FF'}}
            position="bottomRight"
            onPress={() => this.setState({active: !this.state.active})}>
            <Icon name="plus" type="FontAwesome" />
            <Button style={{backgroundColor: '#34A34F'}}>
              <Icon name="edit" type="FontAwesome" />
            </Button>
            <Button style={{backgroundColor: '#3B5998'}}>
              <Icon name="camera" type="FontAwesome" />
            </Button>
            <Button disabled style={{backgroundColor: '#DD5144'}}>
              <Icon name="ellipsis-h" type="FontAwesome" />
            </Button>
          </Fab>
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

export default HomeScreen;
