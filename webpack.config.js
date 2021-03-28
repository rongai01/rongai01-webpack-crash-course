

const path = require('path')
//絶対パスを生成
const outputPath = path.resolve(__dirname,'dist')
console.log({outputPath})


module.exports = {
    entry:'./src/index.js',
    output: {
        filename:'main.js',
        path:outputPath
    }
}