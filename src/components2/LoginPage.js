import './LoginPage.css';
function LoginPage() {
  return (
    <div>
        <div className="container" id="cont">
            <div className="left-panel">
                <span className="B">B</span><span id="b">Book <i class="fa-solid fa-book-open-reader"></i></span>
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
                <span className="x" onClick="xx()"><a href=''>X</a></span>
                <h2>Login</h2>
                <div className="input-box">
                    <label for="username">&#128100;</label>
                    <input type="text" id="username" placeholder="Username"/>
                </div>
                <div className="input-box">
                    <label for="email">&#9993;</label>
                    <input type="email" id="email" placeholder="Email"/>
                </div>
                <div className="input-box">
                    <label for="password">&#128274;</label>
                    <input type="password" id="password" placeholder="Password"/>
                </div>
                <a href="forgetpage.htm"><div className="forgot-password">Forgot Password?</div></a>
                <button className="login-btn">Login</button>
                <div className="signup-link">Don't have an account? <a href="Signup.htm">Sign Up</a></div>
            </div>
        </div>
    </div>
  );
}
export default LoginPage;