/** @jsx jsx */
// SANITIZE.CSS RESETS
import 'sanitize.css/sanitize.css';
import 'sanitize.css/typography.css';
import 'sanitize.css/forms.css';
import 'sanitize.css/assets.css';
import 'sanitize.css/reduce-motion.css';

import { css } from '@emotion/react';
import { colors } from './colors';
import { layout, cssLayout } from './layout';

export const cssGlobal = css`
  ${cssLayout} /* layout imported in */

  h1 {
    color: ${colors.default};
  }
  h2 {
    color: ${colors.primary};
  }
  h3 {
    color: ${colors.textLight};
  }
  h4 {
    color: white;
    margin: 1.33em 0 0.33em;
  }
  a {
    color: ${colors.primary};
    text-decoration: none;
  }
  pre {
    font-size: 0.8em;
    line-height: 1.5;
    color: ${colors.textLight};
  }
  hr {
    border: none;
    border-bottom: ${layout.borderWidth} dashed ${colors.greyXLight};
    margin: calc(${layout.padding}*1.2) 0;
  }

  span.default {
    color: ${colors.default}!important;
  }
  span.primary {
    color: ${colors.primary}!important;
  }
  span.secondary {
    color: ${colors.secondary}!important;
  }
  span.info {
    color: ${colors.info}!important;
  }
  span.success {
    color: ${colors.success}!important;
  }
  span.warning {
    color: ${colors.warning}!important;
  }
  span.danger {
    color: ${colors.danger}!important;
  }

  button {
    display: flex !important;
    align-items: center;
    justify-content: flex-end;
    background: ${colors.primary};
    margin: 0;
    padding: 0.5em;
  }
`;
