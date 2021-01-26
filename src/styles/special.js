import { css } from '@emotion/react';

export const cssBackgroundFrosted = css`
  backdrop-filter: saturate(180%) blur(20px);
  background-color: rgba(255, 255, 255, 0.66);
  transition: background-color 0.5s cubic-bezier(0.28, 0.11, 0.32, 1);
  transition-property: background-color, backdrop-filter, -webkit-backdrop-filter;
`;
