"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BANK_OPTIONS_LIST = [
    { code: 'UNKNOW', startColor: '#ff7a5f', endColor: '#fe5045', icon: require('./bankicon/CEB.png') },
    { code: 'ICBC', startColor: '#ff7a5f', endColor: '#fe5045', icon: require('./bankicon/ICBC.png') },
    { code: 'ABC', startColor: '#60cfb2', endColor: '#349ea9', icon: require('./bankicon/ABC.png') },
    { code: 'CCB', startColor: '#5fbde9', endColor: '#7075d9', icon: require('./bankicon/CCB.png') },
    { code: 'BOC', startColor: '#f1c581', endColor: '#fb6843', icon: require('./bankicon/BOC.png') },
    { code: 'BCOM', startColor: '#5fbde9', endColor: '#7075d9', icon: require('./bankicon/BCOM.png') },
    { code: 'CIB', startColor: '#5fbde9', endColor: '#7075d9', icon: require('./bankicon/CIB.png') },
    { code: 'CITIC', startColor: '#ff7a5f', endColor: '#fe5045', icon: require('./bankicon/CITIC.png') },
    { code: 'CEB', startColor: '#b294e9', endColor: '#876eee', icon: require('./bankicon/CEB.png') },
    { code: 'PAB', startColor: '#f1c581', endColor: '#fb6843', icon: require('./bankicon/PAB.png') },
    { code: 'PSBC', startColor: '#60cfb2', endColor: '#349ea9', icon: require('./bankicon/PSBC.png') },
    { code: 'SHB', startColor: '#5fbde9', endColor: '#7075d9', icon: require('./bankicon/SHB.png') },
    { code: 'SPDB', startColor: '#5fbde9', endColor: '#7075d9', icon: require('./bankicon/SPDB.png') },
    { code: 'CMBC', startColor: '#60cfb2', endColor: '#349ea9', icon: require('./bankicon/CMBC.png') },
    { code: 'CMB', startColor: '#ff7a5f', endColor: '#fe5045', icon: require('./bankicon/CMB.png') },
    { code: 'GDB', startColor: '#ff7a5f', endColor: '#fe5045', icon: require('./bankicon/GDB.png') },
    { code: 'HXB', startColor: '#f1c581', endColor: '#fb6843', icon: require('./bankicon/HXB.png') }
];
function bankCode(code) {
    for (let item of BANK_OPTIONS_LIST) {
        if (item.code === code) {
            return item;
        }
    }
    return BANK_OPTIONS_LIST[0];
}
exports.bankCode = bankCode;
