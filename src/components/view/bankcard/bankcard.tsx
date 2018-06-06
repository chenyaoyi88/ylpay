"use strict";
import * as React from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity
} from 'react-native';

import { pxToDp } from '../../utils';
// import { SvgLinearGradient } from '../../index';
import { bankCode } from './bankcode';

class BankCard extends React.Component<BankCard.BankCardProps, any> {

  constructor(props: BankCard.BankCardProps) {
    super(props);
  }

  static defaultProps = {
    /** 银行的简写 */
    code: 'UNKNOW',
    /** 银行的名称 */
    bankName: '--',
    /** 银行卡的类型 */
    cardType: '--卡',
    /** 银行卡最后四位 */
    cardNoSuf: '----',
  }

  render(): JSX.Element {

    const { code, bankName, cardType, cardNoSuf } = this.props;

    const bankCardOptions: BankCard.BankCardOptions = bankCode(code);

    return (
      <View style={[styles.bankCardWrap]}>

        {/* <SvgLinearGradient
          width={'100%'}
          height={pxToDp(200)}
          id={bankCardOptions.code}
          start={bankCardOptions.startColor}
          end={bankCardOptions.endColor}
          dir={'lr'}
          borderRadius={'20'}
        ></SvgLinearGradient> */}

        <View style={[styles.bankCardContent]}>
          <View style={[styles.bankCardUp]}>
            <View style={[styles.upLeft]}>
              <View style={[styles.upLeftImgWrap]}>
                <Image style={[styles.upLeftImg]} source={bankCardOptions.icon}></Image>
              </View>
              <View style={[styles.upLeftText]}>
                <Text style={[styles.upLeftTextTitle]}>{bankName}</Text>
                <Text style={[styles.upLeftTextDes]}>{cardType}</Text>
              </View>
            </View>

            <View style={[styles.upRight]}>
              <Image style={[styles.upRightIcon]} source={require('./bankicon/yl.png')}></Image>
            </View>

          </View>

          <View style={[styles.bankCardDown]}>
            <Text style={[styles.backCardNumStar]}>**** **** ****<Text style={[styles.backCardNum]}> {cardNoSuf}</Text></Text>
          </View>

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  bankCardWrap: {
    width: '100%',
    height: pxToDp(200),
    position: 'relative',
  },
  bankCardContent: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    flexDirection: 'column'
  },
  bankCardUp: {
    flex: 1,
    flexDirection: 'row',
  },
  bankCardDown: {
    flex: 1,
  },
  upLeft: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: pxToDp(20),
    paddingVertical: pxToDp(16)
  },
  upLeftImgWrap: {
    width: pxToDp(90),
    height: pxToDp(90),
    backgroundColor: 'rgba(255,255,255,0.8)',
    borderRadius: pxToDp(45)
  },
  upLeftImg: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch'
  },
  upLeftText: {
    flexDirection: 'column',
    marginLeft: pxToDp(10),
    marginTop: pxToDp(5)
  },
  upLeftTextTitle: {
    fontSize: pxToDp(30), 
    color: '#fff',
    backgroundColor: 'transparent'
  },
  upLeftTextDes: {
    marginTop: pxToDp(5),
    fontSize: pxToDp(24), 
    color: '#fff',
    backgroundColor: 'transparent'
  },

  upRight: {
    flex: 1,
    alignItems: 'flex-end',
    marginTop: pxToDp(15),
    marginRight: pxToDp(30)
  },
  upRightIcon: {
    width: pxToDp(74),
    height: pxToDp(74),
    opacity: 0.5
  },
  backCardNumStar: {
    marginTop: pxToDp(10),
    marginRight: pxToDp(30),
    fontSize: pxToDp(50),
    color: '#fff',
    textAlign: 'right',
    backgroundColor: 'transparent'
  },
  backCardNum: {
    fontSize: pxToDp(52),
  },

  btnWrap: {
    height: pxToDp(98),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#32c1d4'
  },
  icon: {},
  btnText: {
    fontSize: pxToDp(36),
    color: '#fff'
  },
});

export default BankCard;