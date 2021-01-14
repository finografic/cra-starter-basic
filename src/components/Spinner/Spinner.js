/** @jsx jsx */
import PropTypes from 'prop-types';

import { jsx } from '@emotion/react';
import { styles } from './Spinner.css';

export const Spinner = ({ inline, page, layout, color }) => {
  // SET CLASSES FROM PROPS
  let classes = ['spinner'];
  inline && classes.push('inline');
  page && classes.push('page');
  layout && classes.push('layout');
  color && classes.push(`color-${color}`);
  !color && classes.push('color-dark');
  classes = classes.join(' ');

  return (
    <div css={styles} className={classes}>
      <div className="loader">Loading...</div>
    </div>
  );
};

Spinner.propTypes = {
  inline: PropTypes.bool,
  page: PropTypes.bool,
  layout: PropTypes.bool,
  color: PropTypes.string,
};
