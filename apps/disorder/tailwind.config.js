const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');

module.exports = {
  //purge: createGlobPatternsForDependencies(__dirname),
  content: [
    'apps/disorder/src/**/*.{js,jsx,ts,tsx}',
    ...createGlobPatternsForDependencies(__dirname),
  ],
  //darkMode: false,
  theme: {
    extend: {},
  },
  plugins: [],
};
