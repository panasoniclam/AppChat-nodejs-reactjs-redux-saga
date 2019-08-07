const path = require('path');
const HtmtWebpackPlugin = require('html-webpack-plugin')
module.exports  = {
    entry:'./src/index.js',
    output:{
        path:path.join(__dirname,'/dist'),
        filename:"index_handle.js"
    },
    module:{
        test:/\.js/,
        exclude:/node_modules/,
        use:{
            loaders:['babel-loader']
        }
    },
    plugin:[
        new HtmtWebpackPlugin({
            template:'./src/index.html'
        })
    ]
}