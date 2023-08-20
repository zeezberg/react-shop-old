import { BrowserRouter, Route, Routes, json } from "react-router-dom";
import "./App.css";
import { createContext, useState } from "react";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import ProductsList from "./pages/ProductsList/ProductsList";

export const ThemeContext = createContext(null);

function App() {
  const themeInLS = localStorage.getItem("themeMod");
  const [theme, setTheme] = useState(themeInLS || "light");

  const handleThemeChange = () => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("themeMod", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("themeMod", "light");
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, handleThemeChange }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProductsList />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
