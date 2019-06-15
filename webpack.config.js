const path = require('path');

module.exports = {
    mode: 'development',
    entry: ['./src/index.jsx'],
    output: {
        filename: 'src/bundle.js',
        path: path.resolve('./')
    },
    devServer:{
        contentBase: "./src",
        historyApiFallback: true,
        inline: true,
        port: 8888,
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