module.exports = {
    devServer: {
        port: 8090,
        open: 'Google Chrome',
        hot: true,
    },
    publicPath: process.env.NODE_ENV === 'production'
        ? '/'
        : '/'
}
