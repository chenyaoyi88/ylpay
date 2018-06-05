import React from 'react';
import { Component } from 'react';
import {
    StyleSheet, View, Button,
    Text,
    TouchableOpacity,
    Linking,
    InteractionManager
} from 'react-native';
import { px2dp } from '../../utils';

import { QRscanner } from 'react-native-qr-scanner';

type Props = { navigation: Props_Navigation };
type State = { showCam: Boolean };
export default class ScanScreen extends Component<Props, State> {
    static navigationOptions = {
        title: '扫码二维码'
    };

    constructor(props: any) {
        super(props);
        this.state = {
            showCam: false
        };
    }

    componentDidMount() {
        // InteractionManager.runAfterInteractions(() => {
        // ...耗时较长的同步的任务...
        setTimeout(() => this.setState({ showCam: true }), 150);
        // });
    }

    render() {
        return (
            <View style={styles.container}>
                {
                    this.state.showCam ? <QRscanner onRead={this.onRead} hintTextStyle={styles.hitText} hintTextPosition={0} /> : null
                }
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
    },
    hitText: {
        color: '#fff'
    }
});