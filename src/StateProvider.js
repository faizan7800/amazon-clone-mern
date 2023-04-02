import React, { createContext, useContext, useReducer } from "react";

// this basically prepares the Data Layer
export const StateContext = createContext();

// Selector
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);
// Wrap your app and Provide the Data Layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
// Pull Information from the Data Layer
export const useStateValue = () => useContext(StateContext);
