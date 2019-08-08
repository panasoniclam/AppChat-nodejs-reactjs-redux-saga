const path = require('path');
const HtmtWebpackPlugin = require('html-webpack-plugin')
module.exports  = {
    entry:'./src/index.js',
    output:{
        path:path.join(__dirname,'/dist'),
        filename:"index_handle.js"
    },
   
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
               use: ['babel-loader']
           
            },
           {
               test:/\.css$/,
               exclude:/node_modules/,
               use:['css-loader','style-loader','html-loader']
           }
        ]
   
    },
    plugins:
        [
            new HtmtWebpackPlugin({
                template:'./src/index.html'
            })
        ]
    
}