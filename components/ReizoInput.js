import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';

import moment from 'moment';

export default class ReizoInput extends Component {
  constructor(props) {
    super(props);

    this.ref = {};

    this.state = {
      name: '',
      expirationDate: new Date(),
      isDateTimePickerVisible: false,
    };
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

    this._toggleModal();
  };

  /**
   * モーダルを閉じる処理
   */
  _toggleModal = () => {
    this.props.toggleModal();
  };

  /**
   * datepickerを表示する処理
   */
  _showDateTimePicker = () => {
    this.setState({isDateTimePickerVisible: true});
  };

  /**
   * datepickerを非表示にする処理
   */
  _hideDateTimePicker = () => {
    this.setState({isDateTimePickerVisible: false});
  };

  /**
   * 日付決定時の処理
   */
  _handleDatePicked = date => {
    this._handleDateChange(date);
    console.log('A date has been picked: ', date);
    this._hideDateTimePicker();
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
        <Text style={styles.datepicker} onPress={this._showDateTimePicker}>
          {moment(this.state.expirationDate).format('YYYY/MM/DD')}
        </Text>
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this._handleDatePicked}
          onCancel={this._hideDateTimePicker}
          mode="date"
          locale="ja_JP"
          titleIOS="賞味期限"
          confirmTextIOS="確定"
          cancelTextIOS="キャンセル"
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
    flex: 4,
    backgroundColor: '#FFF',
    borderBottomColor: '#000',
    borderBottomWidth: 0.5,
    marginRight: 5,
  },
  datepicker: {
    flex: 2,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    color: '#008080',
    fontWeight: '700',
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
