import { useEffect, useReducer } from 'react';

const usePromise = (resolvePromise, deps, initialData) => {
  const [state, setState] = useReducer((prev, next) => ({ ...prev, ...next }), {
    loading: true,
    error: null,
    data: initialData,
  });
  useEffect(() => {
    if (!state.loading || state.error) { setState({ loading: true, error: null }); }
    (async () => {
      try {
        const result = await resolvePromise();
        setState({ data: result, loading: false });
      } catch ({ response }) {
        if (response) {
          setState({ error: response.data, loading: false });
        } else {
          setState({ error: 'Network Error', loading: false });
        }
      }
    })();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
  return state;
};

export default usePromise;
