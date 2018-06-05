import React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

type Props = {
  name: string;
  age: number;
};
export default class TestComponent extends Component<Props, any> {

  static defaultProps: Props = {
    name: 'cyy',
    age: 18
  };

  render() {

    const { name, age } = this.props;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.test}>name: {name}</Text>
        <Text style={styles.test}>age: {age}</Text>
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
    color: 'red'
  }
});
