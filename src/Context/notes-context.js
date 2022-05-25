import React, { createContext, useContext, useReducer } from "react";
import { authReducer } from "../Reducers/reducer";

const NotesContext = createContext();

const NotesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    notes: [],
    archives: [],
  });
  return (
    <NotesContext.Provider value={{ state, dispatch }}>
      {children}
    </NotesContext.Provider>
  );
};

const useNotes = () => useContext(NotesContext);

export { useNotes, NotesProvider };
