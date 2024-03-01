import { createContext, useContext, useState } from "react";

const ToggleModeContext = createContext();

export const useToggleMode = () => {
  return useContext(ToggleModeContext);
};

export const ToggleModeProvider = ({ children }) => {
  const [loginMode, setLoginMode] = useState(true);

  const toggleMode = () => {
    setLoginMode((prevMode) => !prevMode);
  };

  return (
    <ToggleModeContext.Provider value={toggleMode}>
      {children}
    </ToggleModeContext.Provider>
  );
};
