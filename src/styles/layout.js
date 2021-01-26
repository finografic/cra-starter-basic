import { css } from '@emotion/react';
import { colors } from './colors';
import { cssBackgroundFrosted } from './special';

const fontSize = 16;
const bgColor = 'white';

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
  header: {
    height: '80px',
  },
};

// LAYOUT STYLES
export const cssLayout = css`
  html,
  body {
    background-color: ${bgColor};
  }

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
    background-color: ${bgColor};
  }

  main {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    min-height: 100%;
    background-color: ${bgColor};
    header + section {
      margin-top: ${layout.header.height};
    }
  }

  section {
    padding: calc(${layout.padding} * 2) calc(${layout.padding} * 1.5);
  }
`;
