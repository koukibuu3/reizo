import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';

export default class ListInput extends Component {
  constructor(props) {
    super(props);

    this.ref = {};
  }

  _onPress = () => {
    this.props.onPress(this.ref._lastNativeText);
    this.ref.setNativeProps({text: ''});
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          // onChangeText={text => onPress(text)}
          ref={ref => {
            this.ref = ref;
          }}
        />
        <TouchableOpacity style={styles.button} onPress={this._onPress}>
          <Text style={styles.buttonText}>追加</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 20,
  },
  textInput: {
    flex: 3,
    backgroundColor: '#FFF',
    marginRight: 5,
  },
  button: {
    flex: 1,
    backgroundColor: '#008080',
    marginLeft: 5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: '500',
  },
});
