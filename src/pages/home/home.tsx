import React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, Linking } from 'react-native';
import { pxToDp } from '../../utils';
import { Item } from '../../components';

const HOME_SRC = [
  {
    name: '付款',
    img: require('../../assets/images/scan.png')
  },
  {
    name: '零钱',
    img: require('../../assets/images/payment1.png')
  },
  {
    name: '银行卡',
    img: require('../../assets/images/bankcard.png')
  }
];


type Props = { navigation: Props_Navigation };
export default class HomeScreen extends Component<Props, any> {

  static navigationOptions = {
    // 占位符，让安卓居中
    headerRight: null,
    title: '首页'
  };

  render() {

    const headerList: any = HOME_SRC.map((item: any, index: number) => {
      return (
        <View style={styles.headerCellItem} key={index}>
          <TouchableOpacity activeOpacity={1} onPress={() => this.headerClick(index)}>
            <View style={styles.headerCell}>
              <View style={styles.headerCellIcon}>
                <Image style={styles.headerCellIcon} source={item.img} />
              </View>
              <View style={styles.headerCellText}>
                <Text>{item.name}</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      )
    });

    return (
      <View style={styles.container}>

        <View style={styles.header}>
          <View style={styles.headerCellContainer}>
            {headerList}
          </View>
        </View>

        <View style={styles.content}>
          <Item
            showIcon={'personal_center_loan_record'}
            iconSize={40}
            title="交易记录"
            onPress={this.goToPageRecord}
          // showDistance={true}
          // bottomLine={true}
          ></Item>
          <Item
            showIcon="personal_center_help"
            iconSize={40}
            title="帮助"
            onPress={this.goToPageHelp}
          ></Item>
          <Item
            title="测试"
            iconSize={48}
            showIcon="settings_about_us"
            status={true}
            statusText=" "
            onPress={this.goToPageLink}
          ></Item>
        </View>

      </View>
    );
  }

  private goBackAndRefresh() {
    console.warn('回来刷新');
  }

  private headerClick(index: number) {
    switch (index) {
      case 0:
        this.props.navigation.navigate('Scan');
        break;
      case 1:
        break;
      case 2:
        this.props.navigation.navigate('Bankcard');
        break;
      default:
    }
  }

  private goToPageRecord = () => {
    this.props.navigation.navigate('Record');
  }

  private goToPageHelp = () => {
    this.props.navigation.navigate('Webview', {
      title: '帮助',
      webviewUrl: 'http://cyy-test.surge.sh/'
    });
  }

  private goToPageLink = () => {
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  test: {
    fontSize: 20,
    color: 'red'
  },
  header: {
    width: '100%',
    height: pxToDp(250),
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#f28f1a',
    backgroundColor: '#fff',
    padding: pxToDp(50)
  },
  headerCellContainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center'
  },
  headerCellItem: {
    flex: 1,
  },
  headerCell: {
    alignItems: 'center'
  },
  headerCellIcon: {
    width: pxToDp(80),
    height: pxToDp(80)
  },
  headerCellText: {
    marginTop: pxToDp(10),
    alignItems: 'center'
  },
  content: {
    marginTop: pxToDp(20),
    marginBottom: pxToDp(20)
  }
});
