const merge = require('webpack-merge');
const baseConfig = require('./base.config');

module.exports = merge(baseConfig, {
    mode: 'development',
    devServer: {
        historyApiFallback: true,
        publicPath: '/bachata-science',
        open: true,
        openPage: 'bachata-science'
    }
});
