import { createContext, useReducer } from "react";

export const GlobalContext = createContext();

const changeState = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_PRODUCT":
      return { ...state, products: [...state, payload] };

    case "CHANGE_COLOR":
      return { ...state, color: payload };
  }
};

export function GlobalContextProvider({ children }) {
  const [state, dispatch] = useReducer(changeState, {
    color: "",
    selelctedProducts: [],
  });
  // const changeColor = (color) => {
  //   dispatch({ type: "CHANGE_COLOR", payload: color });
  // };

  return (
    <GlobalContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}
