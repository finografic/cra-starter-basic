import * as env from 'env-var';
import axios from 'axios';

const craPrefix = 'REACT_APP_';

export const apiEnv = {
  API_HOST: env.get(`${craPrefix}API_HOST`).asString(),
  API_PORT: env.get(`${craPrefix}API_PORT`).default('3030').asPortNumber(),
};

export const apiBaseURL = `http://${apiEnv.API_HOST}:${apiEnv.API_PORT}`;

export const apiConfig = {
  baseURL: apiBaseURL,
  headers: {
    'Content-Type': 'application/json',
    'http_content_language': navigator.language,
  },
};

export default axios.create(apiConfig);
