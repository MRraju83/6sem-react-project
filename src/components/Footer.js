import './Footer.css';
import './Responsive.css';
// import FaBookOpenReader from "react-icons/fa6";
function Footer() {
  return (
    <div>
        <div className="footer">
            <div className="track">
                {/* <i class="fa-solid fa-truck-fast"></i> */}
                <div className="text">
                    <h3>Track your item.</h3>
                    <p>This will profide actualt location</p>
                </div>
            </div>
            <div className="disc">
                {/* <i class="fa-solid fa-gift"></i> */}
                <div className="text">
                    <h3>Discount Coupons</h3>
                    <p>We offer Coupon card for discount</p>
                </div>
            </div>
            <div className="support">
                {/* <i class="fa-solid fa-headphones"></i> */}
                <div class="text">
                    <h3>Costumer Support</h3>
                    <p>24/7 Hours support</p>
                </div>
            </div>
            <div className="pay">
                {/* <i class="fa-solid fa-landmark"></i> */}
                <div className="text">
                    <h3>100% Safe Payment</h3>
                    <p>Don't worry your payment are fully safe</p>
                </div>
            </div>
        </div>
        {/* <!--                       footer2                     --> */}
        
        <div className="footer2">
            <div className="about-content">
                <div className="textt">
                    <h2>
                        Welcome to 
                        <span style={{ fontSize: "35px", color: "#1eade1" }}>B</span>
                        <span style={{ color: "#1eade1" }}>Book {/*<FaBookOpenReader />*/}</span>
                    </h2>
                    <p style={{color: "rgb(191, 201, 209)"}}>BBook is your one-stop online bookstore, bringing you a wide selection of books, stationery, and more. Our mission is to make reading accessible and enjoyable for everyone.</p>
                    <p style={{color: "rgb(2, 2, 2) ;"}}>Explore our vast collection and find the best books for your needs. From bestsellers to academic books, we've got it all.</p>
                    <a href="#" className="btnn">Explore Now</a>
                </div>
            </div>
        <section>
                <div className="usefulllink">
                    <h2>Usefull Links</h2>
                    <div className="Flink">
                        <a href="">About us</a>
                        <a href="">Contact us</a>
                        <a href="">Terms & Condition</a>
                        <a href="">Privacy Policy</a>
                    </div>
                </div>
                <div className="supportt">
                    <h2>Support</h2>
                    <div className="Slink">
                        <a href="">FAQ</a>
                        <a href="">+91-9065205383</a>
                        <a href="">E-mail:bbook@21gmail.com</a>

                    </div>
                </div>
        </section>
        </div>
                    {/* footer3  */}
        <div className="footer3">
            <div className="copy">
                <h4>@Copyright authorised provided</h4>
                <p>Copyright 2022 BBook. All rights reserved. that will no conrain any claim under national govt. book authorised</p>
            </div>
            <div className="footer-content">
                <h3>Join our other Community for information</h3>
            <div className="social">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-github"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-linkedin"></i>
            </div>
            </div>
        </div>
    </div>
  )
}
export default Footer;