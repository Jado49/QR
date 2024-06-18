// postcss.config.js

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
// Example postcss.config.js with additional plugins

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    // Add more plugins as needed
    // Example:
    // require('@fullhuman/postcss-purgecss')({
    //   content: ['./src/**/*.html', './src/**/*.js'],
    //   defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
    // }),
  ],
};
