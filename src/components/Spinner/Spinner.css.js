import { css } from '@emotion/react';
import { colors } from 'styles';

const circleSize = '10px';
const circleOpacity = 0.5;
const timing = 1.8;

export const styles = css`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  &.inline {
    position: relative;
  }

  &.page {
    z-index: 999;
    position: fixed;
  }

  /*** LOADER ELEMENTS ***/

  &.color-light .loader {
    color: ${colors.white};
  }
  &.color-dark .loader {
    color: ${colors.greyDark};
  }

  &.color-default .loader {
    color: ${colors.defaultDark};
  }

  &.color-info .loader {
    color: ${colors.infoDark};
  }

  &.color-success .loader {
    color: ${colors.successDark};
  }

  &.color-warning .loader {
    color: ${colors.warningDark};
  }

  &.color-error .loader,
  &.color-danger .loader {
    color: ${colors.dangerDark};
  }

  .loader,
  .loader:before,
  .loader:after {
    border-radius: 50%;
    width: ${circleSize};
    height: ${circleSize};
    animation-fill-mode: both;
    animation: loading ${timing}s infinite ease-in-out;
  }
  .loader {
    opacity: ${circleOpacity};
    font-size: 0.8em;
    margin: 0 auto;
    position: relative;
    text-indent: -9999em;
    transform: translateZ(0);
    animation-delay: -${timing / 11}s;
    transform: translateY(-100%);
  }
  .loader:before,
  .loader:after {
    content: '';
    position: absolute;
    top: 0;
  }
  .loader:before {
    left: calc(-${circleSize}*1.5);
    animation-delay: -${timing / 5.5}s;
  }
  .loader:after {
    left: calc(${circleSize}*1.5);
  }

  /*** LOADER ANIMATION ***/

  @-webkit-keyframes loading {
    0%,
    80%,
    100% {
      box-shadow: 0 ${circleSize} 0 calc(-${circleSize} / 2);
    }
    40% {
      box-shadow: 0 ${circleSize} 0 0;
    }
  }
  @keyframes loading {
    0%,
    80%,
    100% {
      box-shadow: 0 ${circleSize} 0 calc(-${circleSize} / 2);
    }
    40% {
      box-shadow: 0 ${circleSize} 0 0;
    }
  }
`;
