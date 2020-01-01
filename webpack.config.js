const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader',
                query: {
                    configFileName: './tsconfig.json'
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            }
        ]     
    },
    output: {
        filename: 'main.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: './index.html',
            inject: false,
            template: './src/index.html',
        })
    ],
    resolve: {
        extensions: ['.js', '.ts', '.tsx'],
    },
    // TODO To be applied only on development mode
    devServer: {
      historyApiFallback: true
    }
};