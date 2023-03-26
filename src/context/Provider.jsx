import React, { createContext, useState } from 'react';

export const Context = createContext();

function Provider({ children }) {
  const [catchUser, setCatchUser] = useState();
  const [userInput, setUserInput] = useState("")

  const value = {
    catchUser,
    setCatchUser,
    userInput,
    setUserInput
  };

  return (
    <Context.Provider value={value}>
      {children}
    </Context.Provider>
  );
}

export default Provider;