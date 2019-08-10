const path = require('path');
const sass = require('sass');
module.exports = {
    mode: "development",
    entry: './src/index.tsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../../public/dist')
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }, {
                test: /\.(sa|sc|c)ss$/,
                use: ['style-loader', 'css-loader', {
                    loader: 'sass-loader',
                    options: { implementation: sass }
                }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    devServer: {
        contentBase: path.join(__dirname, '../../public'),
        compress: true,
        port: 9060
    }
};