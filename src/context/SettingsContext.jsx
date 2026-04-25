import { createContext, useContext, useMemo, useReducer } from "react";
import { initialState, settingsReducer } from "./settingsReducer";

const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(settingsReducer, initialState);

  const value = useMemo(() => ({ state, dispatch }), [state]);

  return (
    <SettingsContext.Provider value={value}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  const context = useContext(SettingsContext);

  if (!context) {
    throw new Error("useSettings must be used within a SettingsProvider");
  }

  return context;
};