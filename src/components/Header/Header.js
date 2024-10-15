import "./Header.css";
import Avatar from "../../images/avatar.png";

function Header() {
  return (
    <header className="header">
      <div className="header__content">
        <button className="header__mobile-icon" type="button"></button>
        <h2 className="header__title">Settings</h2>
        <div className="header__settings-block">
          <div className="header__search">
            <i className="header__search-icon"></i>
            <input
              className="header__input"
              placeholder="Search for something"
            ></input>
          </div>
          <div className="header__buttons">
            <button
              className="header__button header__button_setting"
              type="button"
            ></button>
            <button
              className="header__button header__button_notifications"
              type="button"
            ></button>
          </div>
        </div>
        <img className="header__avatar" src={Avatar} alt="Avatar"></img>
      </div>
    </header>
  );
}

export default Header;
