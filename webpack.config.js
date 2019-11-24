
const path = require('path')

// 絶対パスの生成
const outputpath = path.resolve(__dirname, 'dist') 


// module とはファイルのこと
module.exports = {
  // エントリポイント=バンドルの対象
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path:outputpath
  },
  devServer: {
    contentBase: outputpath
  }
}
