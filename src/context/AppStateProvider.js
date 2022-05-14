import React, { createContext, useContext, useReducer } from "react";

import PropTypes from "prop-types";

const Context = createContext();

export const AppStateProvider = ({ reducer, initialState = {}, children }) => {
  const value = useReducer(reducer, initialState);
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

AppStateProvider.propTypes = {
  reducer: PropTypes.func,
  initialState: PropTypes.object,
};

export function useAppState() {
  return useContext(Context);
}
