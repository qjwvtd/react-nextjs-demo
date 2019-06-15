module.exports = {
	root: true,
	env: {
		browser: true,
		node: true
	},
	parserOptions: {
		parser: 'babel-eslint'
	},
	extends: [
	// https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
	// consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
	],
	// required to lint *.vue files
	plugins: [
		'react'
	],
	// add your custom rules here
	rules: {
		"no-empty": "warn",//空语句块警告:{}
		"no-sparse-arrays": "error",//禁止使用稀疏数组,[ "red",, "blue" ]
		"no-unexpected-multiline": "error",//禁止使用令人困惑的多行表达式
		"no-unreachable": "warn",//在return,throw,continue,break之后出现代码告警
		"comma-dangle": ["error", "never"],//禁用对象或数组的拖尾逗号,[1,2,]
		"indent": ["error"],//强制代码缩进，默认4个空格或TAB缩进
		"semi": ["error", "always"],//强制使用分号进行正确的语句结尾
		"no-var": "error",//禁止使用var申明变量，强制使用let,const
		"no-shadow": 2,//外部作用域中的变量不能与它所包含的作用域中的变量或参数同名
		"no-spaced-func": 2//调用函数时,函数名与()之间不能有空格
	}
}
	