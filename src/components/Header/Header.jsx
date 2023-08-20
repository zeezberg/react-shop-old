import "./Header.css";
import { Link } from "react-router-dom";
import SwitchTheme from "../SwitchTheme/SwitchTheme";

function Header() {
  return (
    <header>
      <nav>
        <Link className="header-link">Главная</Link>
        <Link className="header-link">Каталог</Link>
        <Link className="header-link">О нас</Link>
        <Link className="header-link">Кабинет</Link>
      </nav>
      <SwitchTheme />
    </header>
  );
}

export default Header;
