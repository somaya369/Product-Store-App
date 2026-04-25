// 🔽 load settings from localStorage
const loadSettings = () => {
  try {
    const data = localStorage.getItem("settings");
    return data
      ? JSON.parse(data)
      : { theme: "light", view: "grid", language: "en" };
  } catch {
    return { theme: "light", view: "grid", language: "en" };
  }
};

// 🔽 initial state
export const initialState = loadSettings();

export const settingsReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME": {
      const newState = {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };

      localStorage.setItem("settings", JSON.stringify(newState));
      return newState;
    }

    case "SET_VIEW": {
      const newState = {
        ...state,
        view: action.payload,
      };

      localStorage.setItem("settings", JSON.stringify(newState));
      return newState;
    }

    case "SET_LANGUAGE": {
      const newState = {
        ...state,
        language: action.payload,
      };

      localStorage.setItem("settings", JSON.stringify(newState));
      return newState;
    }

    default:
      return state;
  }
};