/** @jsx jsx */
import React from 'react';
import PropTypes from 'prop-types';
import { css, jsx } from '@emotion/react';
import { Link } from 'react-router-dom';
import { getButtonColors } from './getButtonColors';
import { styles } from './Button.css';

export const Button = ({
  type = 'button',
  variant = 'solid',
  color,
  colorHover = color,
  label,
  icon,
  iconPos,
  iconScale = 1.4,
  isBusy,
  padded = false,
  className,
  children,
  ...props
}) => {
  // BUTTON CONTENT: LABEL + ICON

  if (iconPos && iconPos !== 'left' && iconPos !== 'right') iconPos = 'left';

  const ButtonContent = () =>
    children ? (
      <React.Fragment>{children}</React.Fragment>
    ) : (
      <React.Fragment>
        {icon && (!iconPos || iconPos === 'left') && icon}
        {label && <span>{label}</span>}
        {icon && iconPos === 'right' && icon}
      </React.Fragment>
    );

  // ========================================================= //

  // GENERATE SMART COLOR-SCHEME

  const { btnColor, btnColorHover, btnColorContent } = getButtonColors(color, colorHover);

  // DIMENSIONS, PADDING ETC...

  let stylesColor;
  let stylesMisc;
  let borderRadius;
  let buttonScale;
  let hoverFactor = 0.25;

  // GENERATE CSS, DEPENDING ON variant PROP

  switch (variant) {
    case 'outline':
      stylesColor = css`
        & {
          background-color: ${btnColor.alpha(0).string()};
          color: ${btnColor.hex()};
          border-color: ${btnColor.hex()};
        }
        &:not([disabled]):hover {
          background-color: ${btnColorHover.alpha(hoverFactor).string()};
          color: ${btnColorHover.darken(hoverFactor).hex()};
          border-color: ${btnColorHover.darken(hoverFactor).hex()};
        }
      `;
      break;
    case 'clear':
      stylesColor = css`
        & {
          background-color: ${btnColor.alpha(0).string()};
          color: ${btnColor.hex()};
          border-color: ${btnColor.alpha(0).string()};
        }
        &:not([disabled]):hover {
          background-color: ${btnColorHover.alpha(hoverFactor).string()};
          color: ${btnColorHover.darken(hoverFactor).hex()};
          border-color: ${btnColorHover.alpha(0).string()};
        }
      `;
      break;
    case 'solid':
    default:
      stylesColor = css`
        & {
          background-color: ${btnColor.hex()};
          color: ${btnColorContent.hex()};
          border-color: ${btnColor.hex()};
        }
        &:not([disabled]):hover {
          background-color: ${btnColorHover.darken(hoverFactor).hex()};
          color: ${btnColorContent.hex()};
          border-color: ${btnColorHover.darken(hoverFactor).hex()};
        }
      `;
      break;
  }

  stylesMisc = css`
    & {
      padding: ${padded && !label ? '0.5em' : '0.5em 1em'};
      border-radius: ${borderRadius};
      transform: scale(${buttonScale});
    }
  `;

  // CSS STYLES

  const buttonStyles = new Set();
  buttonStyles.add(styles);
  buttonStyles.add(stylesColor);
  buttonStyles.add(stylesMisc);
  iconScale &&
    buttonStyles.add(
      css`
        transform: scale(1);
        svg {
          transform: scale(${iconScale});
        }
        svg + span {
          margin-left: calc(0.6em * ${iconScale});
        }
        span + svg {
          margin-left: calc(0.6em * ${iconScale});
        }
      `
    );

  // CSS CLASSES

  const classes = new Set();
  classes.add(className);
  iconPos && classes.add(iconPos);

  return (
    <button type={type} aria-label={label} css={[...buttonStyles]} className={[...classes]} {...props}>
      <ButtonContent />
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  variant: PropTypes.string,
  color: PropTypes.string,
  colorHover: PropTypes.string,
  label: PropTypes.string,
  icon: PropTypes.element,
  iconPos: PropTypes.string,
  iconScale: PropTypes.number,
  isBusy: PropTypes.bool,
  padded: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
};

// ========================================================= //

export const ButtonLink = (props) => (
  <Link to={props.to}>
    <Button {...props} />
  </Link>
);

ButtonLink.propTypes = {
  to: PropTypes.oneOfType([ PropTypes.string, PropTypes.object ]),
};
