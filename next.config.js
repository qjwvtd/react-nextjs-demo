const withCSS = require('@zeit/next-css');
const isProd = process.env.NODE_ENV === 'production';

module.exports = withCSS({
	webpack:function(config, options){
		// console.log(config);可以在这里修改webpack相关配置，但通常情况下不需要修改
		// Perform customizations to webpack config
        // Important: return the modified config
	    return config;
	},
	webpackDevMiddleware: function(config){
		// Perform customizations to webpack dev middleware config
		// Important: return the modified config
		return config
	},
	// assetPrefix选项配置CDN源 in the production.
	assetPrefix: isProd ? 'https://cdn.mydomain.com' : ''
});