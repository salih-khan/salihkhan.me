module.exports = {
  devServer: {
    proxy: {
      '/pdf': {
        target: 'https://www.w3.org',
        changeOrigin: true,
        pathRewrite: { '^/pdf': '' }, // optional: remove '/pdf' from the URL
      },
    },
  },
  chainWebpack: (config) => {
    // Add rule for PDF files
    config.module
      .rule('pdf')
      .test(/\.(pdf)(\?.*)?$/)
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: 'assets/pdfs/[name].[hash:8].[ext]'
      })
      .end()
  }
};
