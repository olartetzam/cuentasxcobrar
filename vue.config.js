module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  pages:{
    index: {
      entry: "src/main.js",
      template:"public/index.html",
      title: "tere",
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    login: {
      entry: "src/pages/login/main.js",
      template:"public/index.html",
      title: "login",
      chunks: ['chunk-vendors', 'chunk-common', 'login']
    },
  }
  
   

}
