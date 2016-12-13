var path = require('path');
    module.exports = {
        entry: path.join(__dirname, '/src/index'),
        output: {
            path: path.join(__dirname, 'dist'),
            filename: 'bundle.js'
        },
        module: {
            loaders: [
              {   test: /\.js?/,
                  include: __dirname + '/src',
                  loader: 'babel-loader',
                  exclude: [/node_modules/, /styles/]
              },
              {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                  presets: ['es2015', 'react']
                }
              },
              { test: /\.scss$/, loader: "style!css!sass" },
            ],
        }
    };
