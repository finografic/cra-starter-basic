import { useContext, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import { GlobalContext, DispatchContext } from './GlobalContext';
import { toUpperCaseFirst } from 'utils';

/**
 * Custom hook to access GlobalContext state (v1).
 * Intended for REDUX-STYLE dispatch ACTIONS
 * Retruns named { state, dispatch } OBJECT/PROPS
 *
 * EXAMPLE:
 * const { state, dispatch } = useStore();
 * console.log(state);
 * dispatch({ type: 'SET_VALUE', someValue });
 */

export const useStore = () => {
  return { state: useContext(GlobalContext), dispatch: useContext(DispatchContext) };
};

/**
 * Custom hook to access GlobalContext state (v2).
 * NEW + SIMPLIFIED NO REDUX-STYLE dispatch ACTIONS :)
 * MIMICS: [ state, setState ] = React.useState(), but with NAMEMD PROPS
 * Superior DX 👍
 *
 * @param {Object} globalValue              - the global store to target
 * @param {string} globalValue.key          - the key of the targetted global store
 * @param {string} [globalValue.initState]  - optional initial value to set
 *
 * EXAMPLES:
 * const { lang, setLang } = useGlobalContext({ key: 'lang' });
 * const { lang, setLang } = useGlobalContext({ key: 'lang', initState: 'es' });
 */

export const useGlobalContext = ({ key, initState }) => {
  const cache = useRef({});
  const { state, dispatch } = useStore();

  // ALLOW OPTIONAL initState TO MIMIC BEHAVIOUR OF React.useState(initState)
  if (initState && !cache.current[key]) {
    dispatch({ [key]: initState });
    cache.current[key] = initState;
  }

  return {
    [key]: state[key],
    [`set${toUpperCaseFirst(key)}`]: useCallback((value) => dispatch({ [key]: value }), []),
  };
};

useGlobalContext.propTypes = {
  key: PropTypes.string.isRequired,
  initState: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
    PropTypes.object, 
  ]),
};
