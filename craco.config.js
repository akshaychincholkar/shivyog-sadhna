module.exports = {
    webpack: {
        configure: (webpackConfig) => {
            webpackConfig.resolve = {
                ...webpackConfig.resolve,
                symlinks: true,
                fallback: {
                    fs: false,
                    path: false,
                },
            };
            return webpackConfig;
        },
    },
};
