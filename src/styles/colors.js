import { lighten, darken } from 'polished';

export const colors = {
  // BASE COLORS
  default: '#595F5F', // grey
  primary: '#74CABF', // aqua
  secondary: '#b7efcd', // light/pastel green
  // GREYS
  white: '#ffffff',
  greyXLight: '#e9e9e9',
  greyLight: '#cccccc',
  grey: '#999999',
  greyMed: '#999999',
  greyDark: '#666666',
  greyXDark: '#333333',
  // TEXT
  text: '#666666',
  textLight: '#999999',
  // STATES
  info: '#2196f3',
  success: '#4FD885',
  warning: '#ff9800',
  danger: '#f44336',
};

// LIGHT / DARK VERSIONING

colors.info = colors.primary;

const palletteColor = [
  'default',
  'primary',
  'secondary', 
];

for (let color of palletteColor) {
  colors[`${color}XLight`] = lighten(0.25, colors[color]);
  colors[`${color}Light`] = lighten(0.15, colors[color]);
  colors[`${color}Dark`] = darken(0.15, colors[color]);
  colors[`${color}XDark`] = darken(0.25, colors[color]);
}

// THEME "info"
colors.info = colors.primary;

const stateColors = [
  'info',
  'success',
  'warning',
  'danger', 
];

for (let color of stateColors) {
  colors[`${color}XLight`] = lighten(0.5, colors[color]);
  colors[`${color}Light`] = lighten(0.25, colors[color]);
  colors[`${color}Dark`] = darken(0.25, colors[color]);
  colors[`${color}XDark`] = darken(0.5, colors[color]);
}

export default colors;
