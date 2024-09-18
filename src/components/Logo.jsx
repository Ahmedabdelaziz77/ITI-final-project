import { Link } from "react-router-dom";
import logo from "../img/logo.svg";
function Logo() {
  return (
    <Link to={"/home"}>
      <div>
        <img className="w-[40px]" src={logo} alt="logo" />
      </div>
    </Link>
  );
}

export default Logo;
