var path = require('path');
    module.exports = {
        entry: path.join(__dirname, '/src/index'),
        output: {
            path: path.join(__dirname, 'dist'),
            filename: 'bundle.js'
        },
        module: {
            loaders: [
              {   test: /\.js$/,
                  include: __dirname + 'public/js',
                  loader: 'babel-loader',
                  exclude: [/node_modules/, /styles/]
              },
            ],
        }
    };
