import userlogo from "../../assets/images/userlogo.svg";
import logo from "../../assets/images/Logo.png";
import Button from "../reusable_component/Button";

const Navbar = () => {
  return (
    <nav className="animate__animated animate__fadeInDown header__nav">
      <a href="#hero-section">
        <img src={logo} className="nav_logo" />
      </a>
      <ul className="nav_lists">
        <li>
          <a href="#collection" className="nav_list">
            Trending
          </a>
        </li>
        <li>
          <a href="#creators" className="nav_list">
            Top Creators
          </a>
        </li>
        <li>
          <a href="#categories" className="nav_list">
            Categories
          </a>
        </li>
        <Button
          padding={"1.9rem 3rem"}
          altText={"user icon"}
          imgSrc={userlogo}
          btnName={"Sign Up"}
        />
      </ul>
    </nav>
  );
};

export default Navbar;
