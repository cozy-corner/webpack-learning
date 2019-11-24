
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
  module: {
    rules: [
      {
        test: /\.css/,
        use: [
        // 逆順に読み込まれることに注意
        'style-loader',
        'css-loader'
        ]
      }
    ]
  },
  devServer: {
    contentBase: outputpath
  }
}
