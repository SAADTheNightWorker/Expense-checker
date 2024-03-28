import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

export const initialState = {
  transations: [
    { id: 1, text: "flower", amount: -2 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Book", amount: -10 },
    { id: 4, text: "Camera", amount: 150 },
  ],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions

  function delteTrasation(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
    console.log(id);
  }
  function addTrasation(newTransaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: newTransaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{ transations: state.transations, delteTrasation, addTrasation }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
