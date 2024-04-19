import { useCallback, useEffect, useReducer } from 'react';
import { FetchAction } from '../utils/types';

const useFetch = (URL: string) => {
  const initialState = {
    isLoading: true,
    error: undefined,
    data: undefined,
  };

  const reducer = (state = initialState, action: FetchAction) => {
    switch (action.type) {
      case 'loading':
        return {
          ...state,
          isLoading: true,
        };
      case 'error':
        return {
          ...state,
          isLoading: false,
          error: action.payload,
        };
      case 'fetched':
        return {
          ...state,
          isLoading: false,
          data: action.payload,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  // controller para abortar o chamado do fetch, caso o usuário execute outro chamado antes do atual terminar.
  const controller = new AbortController();
  const { signal } = controller;

  const handleFetch = useCallback(async () => {
    dispatch({ type: 'loading' });

    try {
      const response = await fetch(URL, { signal });
      const result = await response.json();

      dispatch({ type: 'fetched', payload: await result });
    } catch (err: any) {
      dispatch({ type: 'error', payload: err });
    }
  }, [URL]);

  useEffect(() => {
    handleFetch();
    return () => {
      controller.abort();
    };
  }, [handleFetch]);

  return {
    data: state.data,
    error: state.error,
    isLoading: state.isLoading,
  };
};

export default useFetch;
