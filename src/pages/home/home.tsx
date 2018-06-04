import React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { px2dp } from '../../utils';

type Props = { navigation: Props_Navigation };
export default class HomeScreen extends Component<Props> {
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
      </View>
    );
  }

  private goBackAndRefresh() {
    console.warn('回来刷新');
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
