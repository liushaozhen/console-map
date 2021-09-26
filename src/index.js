/*
 * @Author: lucian
 * @Date: 2019-08-15 09:27:09
 * @LastEditors: lucian
 * @Descripttion: 
 */
const process = require('process');
const package = require('../package.json');
const { fbi } = require('./map/fbi');
const { girl } = require('./map/girl');
const { death } = require('./map/death');
const { dragon } = require('./map/dragon');
const { bug } = require('./map/bug');
const { alpaca } = require('./map/alpaca');

let order = process.argv[2];
switch (order) {
  case '-v':
    console.log("当前版本号:" + package.version);
    break;
  case '-V':
    console.log(package.version);
    break;
  case 'v':
    console.log(package.version);
    break;
  case '-version':
    console.log(package.version);
    break;
  case 'version':
    console.log(package.version);
    break;
  case 'fbi':
    fbi();
    break;
  case 'girl':
    girl();
    break;
  case 'death':
    death();
    break;
  case 'dragon':
    dragon();
    break;
  case 'alpaca':
    alpaca();
    break;
  case 'bug':
    bug();
    break;
  default:
    console.log([
      "你可以使用以下命令：",
      "******************************",
      "     version：查看版本号",
      "     bug：    佛祖保佑，永无bug",
      "     fbi：    FBI WARNING",
      "     girl：   美女",
      "     death：  骷髅",
      "     dragon： 龙",
      "     alpaca： 羊驼",
      "******************************",
    ].join('\n'))
}