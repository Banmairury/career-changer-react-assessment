import { Link } from "react-router-dom"
import "../style/navbar.css"
const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/owner">Owner</Link>
    </nav>
  );
};

export default Navbar;
