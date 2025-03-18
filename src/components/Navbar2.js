import {Link} from "react-router-dom";
import './Responsive.css';
import './Navbar2.css';
function Navbar2(){
    return (
        <div>
            <nav className="navbar2">
                <div className="brows">
                    <li className="bb">
                        <a href="#">Browse</a>
                        <ul className="br">
                            <li><a href="#">Books</a></li>
                            <li><a href="#">Children</a></li>
                            <li><a href="#">Fiction</a></li>
                        </ul>
                    </li>
                </div>
                <div className="search">
                    <i className="fa-solid fa-magnifying-glass"></i>
                <input type="text" placeholder="Search for products, brands and more"/>
                </div>
                <div className="hm">
                    <Link to="/Login">
                        <button>Login</button>
                    </Link>
                    
                </div>
            </nav>
        </div>
    )
}
export default Navbar2;
