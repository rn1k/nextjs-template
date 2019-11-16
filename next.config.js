require('dotenv').config();

const path = require('path');
const DotEnv = require('dotenv-webpack');

const withImages = require('next-images');
module.exports = withImages({
    webpack: config => {
        config.plugins = config.plugins || [];
        config.plugins = [
            ...config.plugins,
            new DotEnv({
                path: path.join(__dirname, '.env'),
                systemvars: true,
            }),
        ];
        return config;
    },
});
