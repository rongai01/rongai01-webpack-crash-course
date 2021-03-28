import _ from 'lodash'
import Lion from './utilities'

import style from './style.css'
import test from '../src/img/test.jpg'

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

const image = new Image()
image.src = test
document.body.appendChild(image);