import { getReactAppEnv } from 'utils/envUtils';
import { apiEnv, apiConfig } from './api';

export const config = {
  appName: 'Test App',
  api: {
    host: apiEnv.API_HOST,
    port: apiEnv.API_PORT,
    ...apiConfig,
  },
  ...getReactAppEnv(),
};
