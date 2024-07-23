import MobileNav from "./MobileNav.jsx";
import Navbar from "./Navbar";
// import '../App.css'
import { Link } from "react-router-dom";
import logo from "/assets/react.svg";

const Header = () => {
    return (
        <header>
            <div className="nav-area ">
                <Link to="/" className="logo">
                    <img className="nav-logo" src={logo} alt="logo" />
                </Link>
                {/* for large screens */}
                <Navbar />

                {/* for small screens */}
                <MobileNav />
            </div>
        </header>
    );
};

export default Header;
