export const getReactAppEnv = () => {
  const envProps = {};
  for (const [ key, value ] of Object.entries(process.env)) {
    const isReactAppVar = /REACT_APP_/.test(key);
    isReactAppVar && Object.assign(envProps, { [key.replace('REACT_APP_', '')]: value });
  }
  return envProps;
};
