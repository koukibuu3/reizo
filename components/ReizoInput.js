import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import {Item, Input, DatePicker} from 'native-base';

import moment from 'moment';

export default class ListInput extends Component {
  constructor(props) {
    super(props);

    this.ref = {};

    this.state = {
      name: '',
      expirationDate: new Date(),
    };
    // this.state = {chosenDate: new Date()};
    // this._setDate = this._setDate.bind(this);
  }

  /**
   * expirationDateに値をセットする処理
   */
  _handleDateChange = expirationDate => {
    this.setState({expirationDate});
  };

  /**
   * nameに値をセットする処理
   */
  _handleTextChange = name => {
    this.setState({name});
  };

  /**
   * 送信ボタン押下時の処理
   */
  _onSubmit = () => {
    const reizo = {
      name: this.state.name,
      expirationDate: this.state.expirationDate,
    };

    this.props.onSubmit(reizo);

    // stateを初期化する
    this.setState({
      name: '',
      expirationDate: new Date(),
    });
  };

  render() {
    const now = new Date();
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          value={this.state.name}
          onChangeText={this._handleTextChange}
        />
        <DatePicker
          defaultDate={now}
          minimumDate={moment(now)
            .subtract(2, 'months')
            .toDate()}
          maximumDate={moment(now)
            .add(2, 'years')
            .toDate()}
          locale={'ja'}
          timeZoneOffsetInMinutes={undefined}
          modalTransparent={false}
          animationType={'fade'}
          androidMode={'default'}
          placeHolderText="日付を選択"
          textStyle={{color: 'skyblue'}}
          placeHolderTextStyle={{color: '#d3d3d3'}}
          onDateChange={this._handleDateChange}
          disabled={false}
        />
        <TouchableOpacity style={styles.button} onPress={this._onSubmit}>
          <Text style={styles.buttonText}>追加</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
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
