/**
 * @description 通过银行code值输出icon和背景渐变色
 * @param code - 银行缩写
 */
const BANK_OPTIONS_LIST = [
  /** 未知银行 */
  { code: 'UNKNOW', startColor: '#ff7a5f', endColor: '#fe5045', icon: require('./bankicon/CEB.png') },
  /** 中国工商银行 */
  { code: 'ICBC', startColor: '#ff7a5f', endColor: '#fe5045', icon: require('./bankicon/ICBC.png') },
  /** 中国农业银行 */
  { code: 'ABC', startColor: '#60cfb2', endColor: '#349ea9', icon: require('./bankicon/ABC.png') },
  /** 中国建设银行 */
  { code: 'CCB', startColor: '#5fbde9', endColor: '#7075d9', icon: require('./bankicon/CCB.png') },
  /** 中国银行 */
  { code: 'BOC', startColor: '#f1c581', endColor: '#fb6843', icon: require('./bankicon/BOC.png') },
  /** 中国交通银行 */
  { code: 'BCOM', startColor: '#5fbde9', endColor: '#7075d9', icon: require('./bankicon/BCOM.png') },
  /** 兴业银行 */
  { code: 'CIB', startColor: '#5fbde9', endColor: '#7075d9', icon: require('./bankicon/CIB.png') },
  /** 中信银行 */
  { code: 'CITIC', startColor: '#ff7a5f', endColor: '#fe5045', icon: require('./bankicon/CITIC.png') },
  /** 中国光大银行 */
  { code: 'CEB', startColor: '#b294e9', endColor: '#876eee', icon: require('./bankicon/CEB.png') },
  /** 平安银行 */
  { code: 'PAB', startColor: '#f1c581', endColor: '#fb6843', icon: require('./bankicon/PAB.png') },
  /** 中国邮政储蓄银行 */
  { code: 'PSBC', startColor: '#60cfb2', endColor: '#349ea9', icon: require('./bankicon/PSBC.png') },
  /** 上海银行 */
  { code: 'SHB', startColor: '#5fbde9', endColor: '#7075d9', icon: require('./bankicon/SHB.png') },
  /** 浦东发展银行 */
  { code: 'SPDB', startColor: '#5fbde9', endColor: '#7075d9', icon: require('./bankicon/SPDB.png') },
  /** 中国民生银行 */
  { code: 'CMBC', startColor: '#60cfb2', endColor: '#349ea9', icon: require('./bankicon/CMBC.png') },
  /** 招商银行 */
  { code: 'CMB', startColor: '#ff7a5f', endColor: '#fe5045', icon: require('./bankicon/CMB.png') },
  /** 广发银行 */
  { code: 'GDB', startColor: '#ff7a5f', endColor: '#fe5045', icon: require('./bankicon/GDB.png') },
  /** 华夏银行 */
  { code: 'HXB', startColor: '#f1c581', endColor: '#fb6843', icon: require('./bankicon/HXB.png') }
];

export function bankCode(code: string): BankCard.BankCardOptions {
  for (let item of BANK_OPTIONS_LIST) {
    if (item.code === code) {
      return item;
    }
  }
  return BANK_OPTIONS_LIST[0];
}