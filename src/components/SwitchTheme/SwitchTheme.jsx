import { useContext } from "react";
import { ThemeContext } from "../../App";

const SwitchTheme = () => {
  const { handleThemeChange } = useContext(ThemeContext);
  const { theme } = useContext(ThemeContext);

  let switchStyle = "";

  const SwitchSave = () => {
    // const checkStyleSwitch = localStorage.getItem("themeMod");
    const checkStyleSwitch = theme;

    if (checkStyleSwitch === "ligth") {
      switchStyle = "switch-check-dark";
      console.log("switchStyle: ", switchStyle);
    } else {
      switchStyle = "switch-check-light";
      console.log("switchStyle: ", switchStyle);
    }
  };

  return (
    <div className="switch-container">
      <form>
        <label className="switch">
          <input
            className={switchStyle}
            onClick={SwitchSave}
            type="checkbox"
            onChange={handleThemeChange}
          />
          <span className="slider round"></span>
        </label>
      </form>
    </div>

    // <div className="switch-container">
    //   <button onClick={handleThemeChange}>Theme mode</button>
    // </div>
  );
};

export default SwitchTheme;
