import { css } from '@emotion/react';
import { colors } from './colors';

const fontSize = 16;

export const border = css`
  border-color: ${colors.greyXLight};
  border-style: solid;
  border-width: 0px;
`;

// LAYOUT VARIABLES
export const layout = {
  fontSize, // px
  padding: '15px',
  borderWidth: '2px',
  borderRadius: '5px',
};

// BREAKPOINTS (px)
export const breakpointsPX = {
  xs: 0,
  sm: 768,
  md: 1024,
  lg: 1200,
  xl: 1600,
};

// LAYOUT STYLES
export const cssLayout = css`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
      'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100vh;
    overflow-x: hidden;
  }

  #app {
    display: flex;
    min-height: 100vh;
    background: white;
  }

  main {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    min-height: 100%;
    background: white;
  }

  section {
    padding: calc(${layout.padding} * 2) calc(${layout.padding} * 1.5);
  }
`;
