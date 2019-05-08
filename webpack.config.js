const path = require('path');

const config = () => {
	return {
		entry: './src/index.js',
		output: {
			filename: 'bundle.js',
			path: path.resolve(__dirname, 'dist'),
		},
	};
};

module.exports = config;
