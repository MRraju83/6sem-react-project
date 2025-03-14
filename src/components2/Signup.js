import './LoginPage.css';
import { Link , useNavigate} from 'react-router-dom';
function Signup() {

    const navigate = useNavigate();
    const gotoLogin = () => {
        navigate('/login');
    }

  return (
    <div id='container'>
     <div className="container" id="cont">
        <div className="left-panel">
            <span className="B">B</span><span id="b">Book <i className="fa-solid fa-book-open-reader"></i></span>
            <ul>
                <li>52+ Years of Retail Expertise</li>
                <li>International Shipping</li>
                <li>Express Delivery</li>
                <li>Bulk Enquiries</li>
                <li>Free Shipping</li>
                <li>20 Million+ Titles</li>
                <li>100% Genuine Products</li>
                <li>100% Secure Checkout</li>
            </ul>
            <img className="image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGUEg5KVxtw-XtOE1bSeEhnnqhTU7RPsiKyg&s" alt="Online Image"/>
        </div>
        <div className="right-panel">
            <span className="x" onClick={gotoLogin}>X</span>
            <h2>Sign Up</h2>
            <div className="input-box">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Username"/>
            </div>
            <div className="input-box">
                <i className="fas fa-envelope"></i>
                <input type="email" placeholder="Email"/>
            </div>
            <div className="input-box">
                <i className="fas fa-phone"></i>
                <input type="text" placeholder="Mobile number"/>
            </div>
            <div className="input-box">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password"/>
            </div>
            <div className="input-box">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Confirm password"/>
            </div>
            <button className="login-btn">Sign in</button>
            <div>Already have an account?
                <Link to="/login">Login</Link>
            </div>
        </div>
    </div>
    </div>
  );
}
export default Signup;