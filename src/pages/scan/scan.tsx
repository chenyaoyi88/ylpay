import React from 'react';
import { Component } from 'react';
import {
    StyleSheet, View, Button,
    Text,
    TouchableOpacity,
    Linking,
} from 'react-native';
import { px2dp } from '../../utils';

import { QRscanner } from 'react-native-qr-scanner';

type Props = { navigation: Props_Navigation };
export default class ScanScreen extends Component<Props> {
    static navigationOptions = {
        title: '扫码二维码'
    };

    constructor(props: any) {
      super(props);
      this.state = {};
    }

    render() {
        return (
            <View style={styles.container}>
                <QRscanner onRead={this.onRead} finderY={-20} />
            </View>
        );
    }

    onRead = (res: any) => {
        console.log(res);
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000'
    }
});