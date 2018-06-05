"use strict";
import * as React from "react";
import {
  StyleSheet,
  View
} from 'react-native';

interface PageProps {
  bgColor?: string;
  children?: any;
}

class Page extends React.Component<PageProps, null> {

  constructor(props: PageProps) {
    super(props);
  }

  static defaultProps = {
    bgColor: '#f8f8f8'
  }

  render() {
    return (
      <View style={[styles.container, { backgroundColor: this.props.bgColor}]}>
        {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8'
  }
});

export default Page;