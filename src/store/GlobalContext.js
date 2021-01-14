import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import initialState from './store.schema';

export const GlobalContext = createContext(initialState);
export const DispatchContext = createContext(undefined);

export const GlobalProvider = ({ children }) => {
  const [ state, dispatch ] = useReducer((state, newValue) => ({ ...state, ...newValue }), initialState);
  return (
    <GlobalContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>{children}</DispatchContext.Provider>
    </GlobalContext.Provider>
  );
};

GlobalProvider.propTypes = { children: PropTypes.node };
