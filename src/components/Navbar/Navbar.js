import { NavLink } from "react-router-dom";
import { NAVBAR_DATAS } from "../../mocks/navbar-datas";
import HeaderLogo from "../../images/header_logo.svg";
import BorderIcon from "../../images/border_active.svg";
import BorderIconDisabled from "../../images/border.svg";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__header">
        <img className="navbar__logo" src={HeaderLogo} alt="Logo" />
        <h2 className="navbar__title">BankDash.</h2>
      </div>
      <ul className="navbar__menu">
        {NAVBAR_DATAS.map((el) => (
          <li key={el.key}>
            <NavLink
              to={el.key}
              className="navbar__link"
              style={({ isActive }) => ({
                color: isActive ? "#1814F3" : "",
              })}
            >
              {({ isActive }) => (
                <>
                  {isActive ? (
                    <>
                      <img
                        className="navbar__link-logo"
                        src={BorderIcon}
                        alt="Icon Border"
                      />
                      <img
                        className="navbar__link-logo"
                        src={el.active}
                        alt={`Icon ${el.label}`}
                      />
                      {el.label}
                    </>
                  ) : (
                    <>
                      <img
                        className="navbar__link-logo"
                        src={BorderIconDisabled}
                        alt="Icon Border"
                      />
                      <img
                        className="navbar__link-logo"
                        src={el.icon}
                        alt={`Icon ${el.label}`}
                      />
                      {el.label}
                    </>
                  )}
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;
