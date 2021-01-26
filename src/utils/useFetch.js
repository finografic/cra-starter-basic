import { useState, useEffect, useRef } from 'react';
import { api } from '_config';

export const useFetch = () => {
  const cache = useRef({});
  const [ data, setData ] = useState(null);
  const [ error, setError ] = useState(null);
  const [ code, setCode ] = useState(null);
  const [ url, setURL ] = useState();
  const [ isFetching, setIsFetching ] = useState(null);
  const [ refetchIndex, setRefetchIndex ] = useState(0);

  const doFetch = (query) => {
    if (query !== url) {
      setURL(`/${query}`);
    } else {
      setRefetchIndex((prevRefetchIndex) => prevRefetchIndex + 1);
      console.log('refetchIndex = ', refetchIndex);
    }
  };

  useEffect(() => {
    if (!url) return;
    const fetchData = async () => {
      setIsFetching(true);
      if (!cache.current[url]) {
        // NEW FETCH (NOT CACHED)
        try {
          const response = await api.get(url);
          const data = response.data?.data || response.data;
          console.log('%cdata FETCHED:', 'color:lime', data);
          cache.current[url] = data; // set response in cache;
          setData(data);
          setError(false);
        } catch (err) {
          const status = Number(`${err}`.match(/[^code ]*$/)[0]);
          console.log('%cERROR_CODE:', 'color:yellow', status);
          if (status === 401 || status === 403) {
            // not found etc...
          } else {
            // other error code (404, 500, etc): no need to log out
          }
          setError(true);
          setCode(status);
        } finally {
          setIsFetching(false);
        }
      } else {
        // GET FROM CACHE
        const data = cache.current[url];
        console.log('%cGetting data from CACHE. No fetch needed.', 'color:lime', data);
        setData(data);
        setIsFetching(false);
      }
    };

    fetchData();
  }, [ url, refetchIndex ]);

  return { data, isFetching, error, code, doFetch };
};

// NON-HOOK ASYNC FUNCTION FOR SINGLE FETCHING

export const fetchSingleByID = async ({ endpoint, id }) => {
  try {
    const response = await api.get(`${endpoint}/${id}`);
    return response.data;
  } catch (err) {
    console.log('ERROR fetching!', err);
  }
};
