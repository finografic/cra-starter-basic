import Color from 'color';

export const colors = {
  default: '#595F5F', // grey
  primary: '#74CABF', // aqua
  secondary: '#b7efcd', // pastel green
  grey: '#999999',
  text: '#666666',
  states: {
    info: '#2196f3',
    success: '#4FD885',
    warning: '#ff9800',
    danger: '#f44336',
  },
};

// MAIN COLORS: SHADED VERSIONS
for (const [ key, value ] of Object.entries(colors)) {
  if (typeof value === 'object') continue;
  const color = Color(value);
  const { valpha } = color;
  if (valpha < 1) {
    colors[key] = color.opaquer(0).string();
    if (color.luminosity() !== 1) {
      colors[`${key}XLight`] = color.lighten(0.25).opaquer(0).string();
      colors[`${key}Light`] = color.lighten(0.15).opaquer(0).string();
    }
    if (color.luminosity() !== 0) {
      colors[`${key}Dark`] = color.darken(0.15).opaquer(0).string();
      colors[`${key}XDark`] = color.darken(0.25).opaquer(0).string();
    }
  } else {
    colors[key] = color.hex();
    if (color.luminosity() !== 1) {
      colors[`${key}XLight`] = color.lighten(0.25).hex();
      colors[`${key}Light`] = color.lighten(0.15).hex();
    }
    if (color.luminosity() !== 0) {
      colors[`${key}Dark`] = color.darken(0.15).hex();
      colors[`${key}XDark`] = color.darken(0.25).hex();
    }
  }
}

// THEME "info" TO PRIMARY COLOR
colors.states.info = Color(colors.primary).hex();

// STATE COLORS: SHADED VERSIONS + FLATTEN
for (const [ key, value ] of Object.entries(colors.states)) {
  const color = Color(value);
  const { valpha } = color;
  if (valpha < 1) {
    colors[key] = color.opaquer(0).string();
    if (color.luminosity() !== 1) {
      colors[`${key}XLight`] = color.lighten(0.5).opaquer(0).string();
      colors[`${key}Light`] = color.lighten(0.25).opaquer(0).string();
    }
    if (color.luminosity() !== 0) {
      colors[`${key}Dark`] = color.darken(0.25).opaquer(0).string();
      colors[`${key}XDark`] = color.darken(0.5).opaquer(0).string();
    }
  } else {
    colors[key] = color.hex();
    if (color.luminosity() !== 1) {
      colors[`${key}XLight`] = color.lighten(0.5).hex();
      colors[`${key}Light`] = color.lighten(0.25).hex();
    }
    if (color.luminosity() !== 0) {
      colors[`${key}Dark`] = color.darken(0.25).hex();
      colors[`${key}XDark`] = color.darken(0.5).hex();
    }
  }
}

// ADD OFF-WHITE (XXLight GREY)
colors.greyXXLight = '#e9e9e9';

export default colors;
