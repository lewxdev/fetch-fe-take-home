// Learn more: https://github.com/gsoft-inc/craco/blob/master/packages/craco/README.md#configuration-file

const { resolve } = require("path")
const aliases = require("./aliases.config")("./src")

module.exports = {
	// Learn more about configuration options: https://webpack.js.org/configuration/
	webpack: {
		alias: Object.fromEntries(
			Object.entries(aliases).map(([alias, src]) => {
				return [alias, resolve(__dirname, src)]
			})
		),
	},
}
