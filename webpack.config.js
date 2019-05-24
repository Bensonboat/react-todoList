const path = require('path');
module.exports = {
    entry: ['./index.js','./index.jsx'],
    output: {
        filename: 'bundle.js',
        path: path.resolve('./')
    },
    devServer:{
        contentBase: "./src",
        historyApiFallback: true,
        inline: true,
        port: 9000,
        openPage: 'index.html'
    },
    module:{
        rules:[
            {
                test:/\.jsx$/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-react','@babel/preset-env']
                    }
                }
            },
            {
                test:/\.js$/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env']
                    }
                }
            }
        ]
    }
};