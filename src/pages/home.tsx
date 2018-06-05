import React from 'react';
import { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, TouchableWithoutFeedback, InteractionManager } from 'react-native';
import { px2dp } from '../utils';

type Props = {
  navigation: any;
};
export default class Home extends Component<Props> {
  static navigationOptions = {
    header: null,
    title: 'Home'
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.test}>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() =>
            this.props.navigation.navigate('Details', {
              itemId: 86,
              otherParam: 'anything you want here',
              onGoBack: () => this.goBackAndRefresh()
            })
          }
        />

        <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Scan')}>
          <View>
            <Text style={styles.test}>测试扫码~~</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }

  private goBackAndRefresh() {
    console.warn('回来刷新');
  }

  private _navigatorToDefault() {
    InteractionManager.runAfterInteractions(() => {
      this.props.navigation.navigate('Scan');
    });
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
    margin: px2dp(20)
  }
});
