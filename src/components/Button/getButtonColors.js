import Color from 'color';
import { colors } from 'styles';

const isColor = (strColor) => {
  try {
    return Color(strColor) || true;
  } catch (err) {
    console.error(err);
    return false;
  }
};

const getColor = (color) => {
  if (color === 'defaultLight') color = 'silver';
  if (color === 'defaultDark') color = 'gray';
  if (color && colors[color]) {
    color = Color(colors[color]);
  } else if (color && isColor(color)) {
    color = Color(color);
  } else {
    color = colors.default ? Color(colors.default).lighten(0.75) : Color(colors.primary);
  }

  return color;
};

export const getButtonColors = (color, colorHover) => {
  const btnColor = getColor(color);
  const btnColorHover = colorHover ? getColor(colorHover) : btnColor;
  const btnColorContent = btnColor.luminosity() <= 0.7 ? Color('white') : Color(colors.text);

  return { btnColor, btnColorHover, btnColorContent };
};
