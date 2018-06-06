/** 银行卡 */
declare namespace BankCard {
  interface BankCardProps {
    /** 银行的简写 */
    code: string,
    /** 银行的名称 */
    bankName: string;
    /** 银行卡的类型 */
    cardType: string;
    /** 银行卡最后四位 */
    cardNoSuf: string;
  }

  interface BankCardOptions {
    /** 银行的简写 */
    code: string,
    /** 左边渐变开始颜色 */
    startColor: string,
    /** 右边渐变结束颜色 */
    endColor: string,
    /** 图标 */
    icon: any;
  }
}