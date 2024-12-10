import { createContext, useReducer } from "react";



export const GlobalContext = createContext();


const changeState = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "CHANGE_COLOR":
      return { ...state, color: payload };
  }
};

export function GlobalContextProvider({ children }) {
  const [state, dispatch] = useReducer(changeState, {
    color: "",
  });
  const changeColor = (color) => {
    dispatch({ type: "CHANGE_COLOR", payload: color });
  };

  return <GlobalContext.Provider value={{ ...state, changeColor }}>
    {children}
  </GlobalContext.Provider>;
}
