

const path = require('path')
//絶対パスを生成
const outputPath = path.resolve(__dirname,'dist')
console.log({outputPath})


module.exports = {
    entry:'./src/index.js',
    output: {
        filename:'main.js',
        path:outputPath
    },
    module:{
        rules:[
            {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
                ]
            },
            {
            test: /\.(jpe?g|png|gif|svg|ico)$/i,
            loader:'url-loader', 
            options:{
                limit:2048,     // 2Kbiteを超えると
                name:'./images/[name].[ext]' // この名前で別に下記変わり、独立したファイルで分離
            }
            }
        ]
    },
    devServer:{
        contentBase:outputPath
    }
}