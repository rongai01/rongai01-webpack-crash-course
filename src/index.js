import _ from 'lodash' 


function component(){
    const element = document.createElement('div');
    const array = ['Hello','webpack','testes','!!!']
    element.innerHTML =_.join(array,' aaa')
    return element;
}
document.body.appendChild(component());