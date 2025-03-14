import { Link , useNavigate} from "react-router-dom";

function Forget() {
    const navigate = useNavigate();
    const gotoLogin = () => {
        navigate('/login');
    }
  return (
    <div id="container">
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
            <h2>Forget Password</h2>
            <div className="input-box">
                <label for="email">&#9993;</label>
                <input type="email" id="email" placeholder="Email"/>
            </div>
            <button className="login-btn">Submit</button>
            <div className="signup-link">I have remember
                <Link to="/login">Login</Link>
            </div>
        </div>
    </div>
    </div>
  );
}
export default Forget;