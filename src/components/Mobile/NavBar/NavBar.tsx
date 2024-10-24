import "./NavBar.css";

import burger from "../../../assets/Mobile/BurgerMenu.svg";
import icon from "../../../assets/navBarIcons/ProfileIcon.png";

function NavBar({ title }: { title: string }) {
  return (
    <div className="nav-bar">
      <div className="first-line">
        <button className="first-line__button">
          <img src={burger} />
        </button>
        <h1>{title}</h1>
        <div>
          <img src={icon} />
        </div>
      </div>
      <div className="second-line">
        <form className="nav-bar__form">
          <input
            className="nav-bar__form_input"
            type="text"
            placeholder="Search for something"
          ></input>
        </form>
      </div>
    </div>
  );
}

export default NavBar;
