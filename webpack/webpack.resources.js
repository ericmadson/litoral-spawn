const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');

module.exports = require("./webpack.common")({
   mode: "production",

   // In production, we skip all hot-reloading stuff
   entry: [path.join(process.cwd(), "src/index.tsx")],
   
   plugins: [
      new HtmlWebpackPlugin({
         template: "public/index.html",
         minify: {
            removeComments: true,
            collapseWhitespace: true,
            removeRedundantAttributes: true,
            useShortDoctype: true,
            removeEmptyAttributes: true,
            removeStyleLinkTypeAttributes: true,
            keepClosingSlash: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true
         },
         inject: true,
      }),

      new CopyPlugin({
         patterns: [
            {
               from: path.resolve(__dirname, '../src/assets'),
               to: path.resolve(__dirname, '../../html/assets')
            }
         ]
      }),
   ],

   performance: {
      assetFilter: (assetFilename) => !/(\.map$)|(^(main\.|favicon\.))/.test(assetFilename),
   },
});
