import { Component } from "react";
import "./NavbarStyle.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = { clicked: false };
  handleclick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <nav className="navbarItem">
        <h1 className="navLogo">Carzz</h1>
        <div className="menuIcons" onClick={this.handleclick}>
          <i
            className={
              this.state.clicked ? "fa-solid fa-xmark" : "fa-solid fa-bars"
            }
          ></i>
        </div>

        <ul className={this.state.clicked ? "navMenu active" : "navMenu"}>
          {MenuItems.map((items, index) => {
            return (
              <li keys={index}>
                <Link className={items.cName} to={items.url}>
                  <i className={items.icons}></i>
                  {items.items}
                </Link>
              </li>
            );
          })}
          <button>Sign Up</button>
        </ul>
      </nav>
    );
  }
}
export default Navbar;
