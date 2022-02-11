const path = require('path') // utiliza o path.resolve para evitar erro de sintaxe em SOs diferentes
const HtmlWebpackPlugin = require('html-webpack-plugin')

const isDevelopment = process.env.NODE_ENV != 'production'

module.exports = {
    mode: isDevelopment ? 'development': 'production',
    devtool: 'eval-source-map', // exibe exatamente o código da aplicação
    entry: path.resolve(__dirname, 'src', 'index.jsx'),
    output: {
        path: path.resolve(__dirname, 'dist'), 
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.js', '.jsx'], // auto completa/entende as extensões
    },
    devServer: {
        static: path.resolve(__dirname, 'public'), // Quando atualiza os arquivos faz o reload automatico
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        })
    ],
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader'], // Aplica o CSS e permite importacao no javascript
            },
        ],
    }
};