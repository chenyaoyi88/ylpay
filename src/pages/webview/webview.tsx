import React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View, Button, WebView } from 'react-native';
import { pxToDp } from '../../utils';

type Props = { navigation: Props_Navigation };
type State = { webviewUrl: string };

export default class WebviewScreen extends Component<Props, State> {

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title', 'webview'),
    };
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      webviewUrl: ''
    };
  }

  private webview: any = null;

  render() {
    return (
      <View style={{ flex: 1 }}>
        <WebView
          ref={(w: any) => { this.webview = w; }}
          automaticallyAdjustContentInsets={false}
          source={{ uri: this.state.webviewUrl }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          decelerationRate="normal"
          startInLoadingState={true}
          scalesPageToFit={false}
        />
      </View>
    );
  }

  componentWillMount() {
    const webviewUrl = this.props.navigation.state.params.webviewUrl;
    this.setState({
      webviewUrl
    });
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8'
  }
});
