import { create } from '@storybook/theming';

export default create({
  base: 'light',
  brandTitle: 'Theme',
  brandImage:
    'https://firebasestorage.googleapis.com/v0/b/woming-poker.appspot.com/o/app-jpg.jpg?alt=media&token=dbe1e49c-b1e3-4938-8440-52cdf36685a3',
  // custom
  colorPrimary: '#2d3436',
  colorSecondary: '#2d3436',

  // UI
  appBg: 'white',
  appContentBg: '#F4F4F7',
  appBorderColor: 'grey',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Input Mono", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: '#2f3640',
  // textInverseColor: 'rgba(255,255,255,0.9)',
  textInverseColor: '#4ebeb1',

  // Toolbar default and active colors
  barTextColor: 'silver',
  barSelectedColor: '#4ebeb1',
  barBg: 'white',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: '#2d3436',
  inputBorderRadius: 4,
});
