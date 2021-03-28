import _ from 'lodash'
import Lion from './utilities'

import style from './style.css'
console.log(style.toString());





console.log(Lion.say());

function component(){
    const element = document.createElement('div');
    const array = ['Hello','webpack','testes','!!!']
    element.innerHTML =_.join(array,' aaa')
    return element;
}
document.body.appendChild(component());

document.body.classList.add('back-bg')

