/** @jsx jsx */
import { css } from '@emotion/react';
import { layout } from 'styles';

export const styles = css`
  /* RESET */
  appearance: none;
  outline: none;
  background: none;
  border: none;
  position: relative;

  /* Center text */
  display: flex;
  justify-content: center;
  align-items: center;

  /* border */
  border-width: ${layout.borderWidth};
  border-style: solid;
  padding: 0.25em 1em;
  border-radius: ${layout.borderRadius};

  /* TEXT */
  font-size: 1em;
  font-weight: 600;
  letter-spacing: -0.02em;
  white-space: nowrap;

  /* UX */
  transition: background-color 300ms ease, border-color 300ms ease;

  &:disabled {
    opacity: 0.33;
    cursor: default;
  }

  &:not([disabled]) {
    cursor: pointer;
  }

  span {
    padding-top: 0.1em;
  }

  /* ICON */
  svg {
    vertical-align: middle;
  }

  svg + span {
    margin-left: 0.25em;
  }

  span + svg {
    margin-left: 0.25em;
  }
`;
