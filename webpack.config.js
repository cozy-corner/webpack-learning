
const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

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
      { test: /\.jsx?$/, 
        // 自作のJSのみ対象
        exclude: /node_modules/, 
        loader: "babel-loader" 
      },
      {
        test: /\.(sc|c)ss$/,
        use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        'sass-loader'
        ]
      }, 
      {
      // i 大文字の許容 $ 末尾
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        loader: 'url-loader',
        options: {
          // 2kb 以上
          limit: 2048,
          name: './images/[name].[ext]'
        }
      },
      {
         test: /\.html/,
         loader: 'html-loader'
      }
    ]
  },
  devServer: {
    contentBase: outputpath
  },
  plugins: [
     new HtmlWebPackPlugin({
       template: './src/index.html',
       filename: './index.html'
     }),
     new MiniCssExtractPlugin({
       // name default=main
       // ハッシュはキャッシュ回避のため
       filename: '[name].[hash].css'
     })
  ]
}
