const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}" ],
  plugins: [
    plugin(function ({ addVariant, e, postcss }) {
	  addVariant('firefox', ({ container, separator }) => {
		const isFirefoxRule = postcss.atRule({
		  name: '-moz-document',
		  params: 'url-prefix()',
		});
		isFirefoxRule.append(container.nodes);
		container.append(isFirefoxRule);
		isFirefoxRule.walkRules((rule) => {
		  rule.selector = `.${e(
			`firefox${separator}${rule.selector.slice(1)}`
        )}`;
      });
      });
    }),
  ]
}