/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

// import React, { Component } from 'react';
import React from 'react'
import { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

type Props = {};
export default class Test extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.test}>
          test page
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  test: {
    fontSize: 20,
    color: 'red',
    margin: 10,
  }
});
