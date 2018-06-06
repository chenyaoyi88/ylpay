import React from 'react';
import { Component } from 'react';
import { StyleSheet, Text, View, Button, Image, FlatList } from 'react-native';
import { pxToDp } from '../../utils';

type Props = { navigation: Props_Navigation };
export default class RecordScreen extends Component<Props> {
  
  static navigationOptions = {
    title: '交易记录'
  };

  render() {

    return (
      <View style={{ flex: 1 }}>
        <View style={styles.content}>

          <View style={styles.contentTitle}>
            <Text style={styles.contentTitleText}>交易记录</Text>
          </View>

          <View style={styles.ylListTips}>
            <Text style={styles.ylListTipsText}>加载中...</Text>
          </View>

          <View>

            <View style={styles.ylListItem}>

              <Image style={styles.ylListItemImg} source={require('../../assets/images/record.png')} />

              <View style={styles.ylListItemContent}>
                <Text style={styles.ylListItemName}>商家编号</Text>
                <Text style={styles.ylListItemDate}>交易时间 2018.05.31 17:01:06</Text>
              </View>

              <View style={styles.ylListItemAmount}>
                <Text style={styles.ylListItemAmountText}>￥1.00</Text>
              </View>

            </View>

          </View>

          <View style={styles.ylListTips}>
            <Text style={styles.ylListTipsText}>-- 暂无更多记录 --</Text>
          </View>

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  content: {
    // backgroundColor: 'red',
    flexDirection: 'column',
  },
  contentTitle: {
    paddingTop: pxToDp(10),
    backgroundColor: '#fff',
    borderBottomWidth: pxToDp(1),
    borderBottomColor: '#d9d9d9'
  },
  contentTitleText: {
    fontSize: pxToDp(30),
    paddingTop: pxToDp(20),
    paddingBottom: pxToDp(20),
    paddingLeft: pxToDp(20),
  },
  ylListItem: {
    flexDirection: 'row',
    alignItems: 'center',
    height: pxToDp(120),
    backgroundColor: '#fff',
  },
  ylListItemImg: {
    width: pxToDp(80),
    height: pxToDp(80),
    marginLeft: pxToDp(20),
    marginRight: pxToDp(20),
  },
  ylListItemContent: {
    flex: 1,
  },
  ylListItemAmount: {
    marginLeft: pxToDp(20),
    marginRight: pxToDp(20),
  },
  ylListItemAmountText: {
    fontSize: pxToDp(30)
  },
  ylListNomore: {},
  ylListTips: {
    marginTop: pxToDp(15),
    marginBottom: pxToDp(15),
    alignItems: 'center'
  },
  ylListTipsText: {
    fontSize: pxToDp(30),
  },
  ylListItemName: {
    fontSize: pxToDp(30)
  },
  ylListItemDate: {
    fontSize: pxToDp(24),
    marginTop: pxToDp(3),
    marginBottom: pxToDp(3),
  }
});
