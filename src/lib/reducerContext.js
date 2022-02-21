import { createContext, useCallback, useContext } from "react";

export const DispatchContext = createContext(null);
export const AppStateContext = createContext(null);

export const useAppState = () => useContext(AppStateContext);
export const useDispatch = (selectFunction, deps = []) => {
  const dispatch = useContext(DispatchContext);

  if (!selectFunction) {
    return dispatch;
  }

  // It seems to be safe to call useCallback hook here because
  // `selectFunction` will never be conditional, i.e. never change.
  // Therefore the deps also don't need to include `selectFunction`
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const curriedDispatch = useCallback(
    (...args) => dispatch(selectFunction(...args)),
    deps // eslint-disable-line react-hooks/exhaustive-deps
  );

  return curriedDispatch;
};
