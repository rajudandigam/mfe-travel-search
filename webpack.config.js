const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  entry: path.resolve(__dirname, 'src/index.tsx'),
  mode: 'development',
  devtool: 'source-map',
  output: {
    publicPath: 'auto',
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  resolve: { extensions: ['.tsx', '.ts', '.js'] },
  module: {
    rules: [{ test: /\.tsx?$/, loader: 'ts-loader', exclude: /node_modules/ }],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'mfe_travel_search',
      filename: 'remoteEntry.js',
      exposes: {
        './Search': './src/components/Search',
      },
      shared: {
        react: { singleton: true, requiredVersion: false },
        'react-dom': { singleton: true, requiredVersion: false },
      },
    }),
    new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'public/index.html') }),
  ],
  devServer: {
    port: 3003,
    historyApiFallback: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
  },
};
