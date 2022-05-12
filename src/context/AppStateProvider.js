import React, { createContext, useContext, useReducer } from "react";
import PropTypes from "prop-types";
// @ts-ignore
const Context = createContext();

export const AppStateProvider = ({ reducer, initialState = {}, children }) => {
  const value = useReducer(reducer, initialState);
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

AppStateProvider.propTypes = {
  // @ts-ignore
  reducer: PropTypes.func,
  // @ts-ignore
  initialState: PropTypes.object,
};

export function useAppState() {
  return useContext(Context);
}
