import React from 'react';
import Layout from 'containers/Layout';

import { Global } from '@emotion/react';
import { cssGlobal } from 'styles/global';

export default function App() {
  return (
    <React.Fragment>
      <Layout />
      <Global styles={cssGlobal} />
    </React.Fragment>
  );
}
