"use strict";
import * as React from "react";
import {
  StyleSheet,
  View,
  Image
} from 'react-native';

interface LogoProps {
  marginTop?: number
  marginBottom?: number
}

class Logo extends React.Component<LogoProps, null> {

  constructor(props: LogoProps) {
    super(props);
  }

  static defaultProps = {
    marginTop: 0,
    marginBottom: 0
  }

  render() {
    const { marginTop, marginBottom } = this.props;
    return (
      <View style={[styles.logoWrap, {
        marginTop: marginTop,
        marginBottom: marginBottom
      }]}>
        <Image style={[styles.logo]} source={require('./moka-logo.png')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logoWrap: {
    height: 100,
    alignItems: 'center'
  },
  logo: {
    width: 100,
    height: '100%'
  }
});

export default Logo;