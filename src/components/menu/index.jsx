import { Link } from "react-router-dom";
import "./style.css";

export function Menu() {

    return (

        <div className="menu">
            <nav className="menu">
                <Link to="/" className="menu">HOME</Link>
            </nav>
            <nav className="menu">
                <Link to="/about" className="menu" >ABOUT US</Link>
            </nav>


            <nav className="menu">
                <Link to="/BLOG" className="menu">BLOG</Link>
            </nav>

        </div>
    )

}