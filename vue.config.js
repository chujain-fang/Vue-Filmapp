module.exports = {
    devServer: {
      proxy: {
        '/ip/': {
          target: 'https://api.asilu.com',
          ws: true,
          changeOrigin: true
        },
        '/foo': {
          target: '<other_url>'
        }
      }
    }
  }
  