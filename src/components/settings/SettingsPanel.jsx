import { useSettings } from "../../context/SettingsContext";
import { translations } from "../../i18n/translations";
import Button from "../ui/Button";

const SettingsPanel = () => {
  const { state, dispatch } = useSettings();
  const t = translations[state.language];

  return (
    <div className="settings-panel">
      <h2>{t.settings}</h2>

      <div className="settings-actions">
        <Button onClick={() => dispatch({ type: "TOGGLE_THEME" })}>
          {t.theme}: {state.theme}
        </Button>

        <Button onClick={() => dispatch({ type: "SET_VIEW", payload: "grid" })}>
          {t.gridView}
        </Button>

        <Button onClick={() => dispatch({ type: "SET_VIEW", payload: "list" })}>
          {t.listView}
        </Button>

        <Button onClick={() => dispatch({ type: "SET_LANGUAGE", payload: "en" })}>
          {t.english}
        </Button>

        <Button onClick={() => dispatch({ type: "SET_LANGUAGE", payload: "fa" })}>
          {t.persian}
        </Button>
      </div>
    </div>
  );
};

export default SettingsPanel;