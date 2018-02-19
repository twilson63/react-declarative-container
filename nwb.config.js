module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'ReactDeclarativeContainer',
      externals: {
        react: 'React'
      }
    }
  }
}
