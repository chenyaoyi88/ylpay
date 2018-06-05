import React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { pxToDp } from '../../utils';

type Props = { navigation: Props_Navigation };
export default class BankcardScreen extends Component<Props> {
  static navigationOptions = {
    title: '银行卡'
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.test}>BankcardScreen Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  test: {
    fontSize: 20,
    color: 'red',
    margin: pxToDp(20)
  }
});
