import React from 'react';
import { Component } from 'react';
import {
    StyleSheet, View, Button,
    Text,
    TouchableOpacity,
    Linking,
} from 'react-native';
import { px2dp } from '../../utils';

type Props = { navigation: Props_Navigation };
export default class ScanScreen extends Component<Props> {
    static navigationOptions = {
        title: '扫码二维码'
    };

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={styles.textBold}>扫码二维码 Screen</Text>
            </View>
        );
    }

    onSuccess(e: any) {
        console.warn(e);
    }

    componentDidMount() {
        console.warn(123);
    }
}


const styles = StyleSheet.create({
    centerText: {
        flex: 1,
        fontSize: 18,
        padding: 32,
        color: '#777',
    },
    textBold: {
        fontWeight: '500',
        color: '#000',
    },
    buttonText: {
        fontSize: 21,
        color: 'rgb(0,122,255)',
    },
    buttonTouchable: {
        padding: 16,
    },
});
