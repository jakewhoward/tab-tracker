// https://eslint.org/docs/user-guide/configuring

module.exports = {
	root: true,
	parser: 'babel-eslint',
	parserOptions: {
		sourceType: 'module'
	},
	env: {
		browser: true,
	},
	// https://github.com/standard/standard/blob/master/docs/RULES-en.md
	extends: 'standard',
	// required to lint *.vue files
	plugins: [
		'html'
	],
	// add your custom rules here
	'rules': {
		"strict": 0,
		"indent": ["error", "tab"],
		"comma-dangle": 2,
		"no-unused-vars": [2, {"args": "none"}],
		"no-console": 1,
		"no-var": 2,
		"no-tabs": 0,
		"space-before-function-paren": [2, { "anonymous": "always", "named": "never" }],
		"space-infix-ops": 0,
		"max-len": [2, 160, 2],
		"padded-blocks": 0,
		"no-multiple-empty-lines": 2
	}
}
