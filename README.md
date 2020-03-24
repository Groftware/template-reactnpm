> This project is created to simplify the process of publishing a React component to npm.

## Guide
1. Replace contents in `/src` with your React component.
1. Edit `webpack.config.js`, replace the following:
	1. `entry: './src/YOUR_COMPONENT.js'` Replace value of `entry` to path to the entry point of your component.
	1. Replace 	`output.filename` to the name of your component
	```
		output: {
			path: path.resolve('lib'),
			filename: 'YOUR_COMPONENT.js',
			libraryTarget: 'commonjs2',
  	},
	```
1. Edit `package.json`, replace the following:
	1. `"name": "YOUR_PACKAGE_NAME"` Replace the value of `name` to your package name. This will be the name of the package that is published to `npm` and the name that is used when other people install your package using `npm install YOUR_PACKAGE_NAME`.
	1. Update the values of `version` and `description` to accordingly.
	1. `"main": "./lib/YOUR_COMPONENT.js"` replace `YOUR_COMPONENT.js` with the name that you've set in `output.filename` during Step #2
	1. If your component uses any other dependencies, make sure to add them into the `peerDependencies` list.
1. Building your component by running `npm build` in your command line. This would generate the folder `/lib` which includes your component.
1. Publishing to [npm](https://www.npmjs.com/)
	1. Make sure you've [registered an npm account](https://www.npmjs.com/signup)
	1. Run `npm login` in your command line, and enter your credentials.
	1. Run `npm publish`, and your React component will be uploaded to npm! You can find it at https://www.npmjs.com/package/[YOUR PACKAGE NAME] or your npm profile.

1. To update your package, make sure you remember to increment the `version` in `package.json`, and then perform Step #5 again.