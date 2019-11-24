import _ from 'lodash'
// 拡張子は省略可能
// import { NAME,nijou } from './utilities'
//import * as utilities from './utilities'

// 名前の競合の解消
// 名前の競合の回避にも使える
//import { NAME as NAME_OF_HAM } from './utilities'

// defualtのexport/import
//import Lion from './utilities'
import Tora from './utilities'

//console.log(utilities.nijou(5))
console.log(Tora.say())

function component() {
  const element = document.createElement('div');
  const array = ['Hello','webpack','!!'];
  element.innerHTML = _.join(array, ' ')
  return element;
}

document.body.appendChild(component());