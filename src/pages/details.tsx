import React from 'react';
import { Component } from 'react';
import { Text, View, Button } from 'react-native';

type Props = { navigation: Props_Navigation };
export default class DetailsScreen extends Component<Props> {
  static navigationOptions = {
    title: 'Details'
  };

  render() {
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');
    const otherParam = navigation.getParam('otherParam', 'some default value');

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Button
          title="Update the title"
          onPress={() =>
            this.props.navigation.setParams({ otherParam: 'Updated!' })
          }
        />
        <Button
          title="Go to Details... again"
          onPress={() =>
            this.props.navigation.push('Details', {
              itemId: Math.floor(Math.random() * 100)
            })
          }
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button title="Go back" onPress={() => this.goBack()} />
      </View>
    );
  }

  private goBack() {
    const { goBack, state } = this.props.navigation;
    const onGoBack = state.params.onGoBack;
    goBack();
    // 返回刷新
    onGoBack && onGoBack();
  }
}
