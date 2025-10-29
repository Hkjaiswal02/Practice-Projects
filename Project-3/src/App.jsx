import { createContext, useState } from "react";
import "./App.css";
import Gamepage from "./component/GamePage/Gamepage";
import HomePage from "./component/HomePage/HomePage";

export const ToggleContext = createContext();
function App() {
  const [isToggled, setIsToggled] = useState(false);

  const toggle = () => setIsToggled((prev) => !prev);
  return (
    <ToggleContext.Provider value={{ isToggled, toggle }}>
      <div className={`page ${isToggled ? "show" : "hide"}`}>
        {isToggled ? <Gamepage /> : <HomePage />}
      </div>
    </ToggleContext.Provider>
  );
}

export default App;
