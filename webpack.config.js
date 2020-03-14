const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
            {
                test: /\.(jpe?g|png)$/i,
                use:[
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true, //webpack@1.x
                            disable: true, //webpack@2.x and new
                            //optimizing jpg images
                            mozjpeg: {
                                progressive: true,
                                quality: 65
                            },
                        },
                    },
                ],
            },
        ],
    },
};