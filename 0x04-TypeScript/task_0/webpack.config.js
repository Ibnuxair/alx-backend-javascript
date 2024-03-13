const path = require('path');

module.exports = {
  entry: './js/main.ts', // Entry point of your TypeScript application
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js', // Name of the bundled JavaScript file
  },
  resolve: {
    extensions: ['.ts', '.js'], // Extensions to resolve
  },
  module: {
    rules: [
      {
	test: /\.ts$/, // Apply loader to TypeScript files
	exclude: /node_modules/, // Exclude node_modules directory
	use: 'ts-loader', // Use ts-loader for transpilation
      },
    ],
  },
};
