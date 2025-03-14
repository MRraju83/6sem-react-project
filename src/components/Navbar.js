import './Navbar.css';
import './Responsive.css';
//import LoginPage from '../components2/LoginPage';

// import sc1 from '../images/sc1.png';
// import sc2 from '../images/sc2.png';
// import sc3 from '../images/sc3.png';
// import sc4 from '../images/sc4.png';
// import sc5 from '../images/sc5.png';

// import b1 from '../images/b1.jpg';
// import b2 from '../images/b2.jpg';
// import b3 from '../images/b3.jpg';
// import b4 from '../images/b4.jpg';
// import b5 from '../images/b5.jpg';
// import b6 from '../images/b6.jpg';
// import b7 from '../images/b7.jpg';
// import b8 from '../images/b8.jpg';
// import b9 from '../images/b9.jpg';
// import b1o from '../images/b1o.jpg';
// import b11 from '../images/b11.jpg';

// import childbook from '../images/childbook.png';
// import stationary from '../images/stationary.png';
// import activitybook from '../images/activitybook.png';


// import { Link } from 'react-router-dom';

import React, { useRef} from 'react';

function Navbar(){



    // const imageBoxRef = useRef(null);
    //     const images = [sc1, sc2, sc3, sc4, sc5];
    
    //     function scrollLeft() {
    //         if (imageBoxRef.current) {
    //             if (imageBoxRef.current.scrollLeft === 0) {
    //                 // Jump to last image
    //                 imageBoxRef.current.scrollLeft = imageBoxRef.current.scrollWidth;
    //             } else {
    //                 imageBoxRef.current.scrollLeft -= imageBoxRef.current.clientWidth;
    //             }
    //         }
    //     }
    
    //     function scrollRight() {
    //         if (imageBoxRef.current) {
    //             if (
    //                 imageBoxRef.current.scrollLeft + imageBoxRef.current.clientWidth >=
    //                 imageBoxRef.current.scrollWidth
    //             ) {
    //                 // If at last image, restart from first
    //                 imageBoxRef.current.scrollLeft = 0;
    //             } else {
    //                 imageBoxRef.current.scrollLeft += imageBoxRef.current.clientWidth;
    //             }
    //         }
    //     }
    
        // Auto-scroll every 3 seconds
        // useEffect(() => {
        //     const interval = setInterval(() => {
        //         scrollRight();
        //     }, 3000);
    
        //     return () => clearInterval(interval);
        // }, []);


    return (
        <div>
            <nav className="navbar">
                <div className="logo">
                    <p> 
                        <span className="book "><span className="B">B</span>BOOK</span>
                    </p>
                </div>
                <ul className="link">
                    <li className="item">
                        <a href="#">BOOKS</a><span></span>
                        <ul className="link-item">
                            <li><a href="#">Hindi Books</a></li>
                            <li><a href="#">English Books</a></li>
                            <li><a href="#">Author Books</a></li>
                            <li><a href="#">Galaxy</a></li>
                            <li><a href="#">Animals books</a></li>
                            <li><a href="#">Remedial</a></li>
                        </ul>
                    </li>
                    <li className="ii"><a href="">INDIA</a></li>
                    <li className="item">
                        <a href="#">STATIONARY</a>
                        <ul className="link-item">
                            <li><a href="#">TextBooks</a></li>
                            <li><a href="#">Bags</a></li>
                            <li><a href="#">Ball pen</a></li>
                            <li><a href="#">Shop store</a></li>
                            <li><a href="#">Others</a></li>
                        </ul>
                    </li>
                    <li><a href="#">TOY</a></li>
                </ul>
                <div className="pro">
                    <p><i className="fa-solid fa-truck"></i>Become</p>
                    <span><i className="fa-solid fa-cart-shopping"></i>Bag</span>
                </div>
            </nav>


            {/*                        navbar2 design          */}
            {/* <nav className="navbar2">
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
                    <Link to={"login"}>
                        <button>Login2</button>
                    </Link>
                </div>
            </nav> */}


            {/*                     image slide design          */}
            {/* <div className="slid">
                <button className="btn btn-left" onClick={scrollLeft}>&#10094;</button>
                <div className="image-box" ref={imageBoxRef}>
                    {images.map((image, index) => (
                        <img key={index} src={image} alt='' />
                    ))}
                </div>
                <button className="btn btn-right" onClick={scrollRight}>&#10095;</button>
            </div> */}


            {/*               card1 design   */}
            {/* <div className="card">
                <h2 className="h22">Hot deal start here</h2>
                <div className="card-box">
                    <h2>Hot Deal </h2>
                    <h3>2:3:00 count</h3>
                    <strong>The hot deal is starting</strong>
                </div>
                <div className="cart-img">
                    {/* <button class="butt butt-right">&#10094;</button>}
                    <div className="cart-img1">
                        <a href="LoginPage.js"><img src={b1} alt=""/></a>
                        <p>The martin:</p>
                        <span>Price: 240/only</span>
                    </div>
                    <div className="cart-img1">
                        <img src={b2} alt=""/>
                        <p>The martin:</p>
                        <span>Price: 240/only</span>
                    </div>
                    <div className="cart-img1">
                        <img src={b3} alt=""/>
                        <p>The martin:</p>
                        <span>Price: 240/only</span>
                    </div>
                    <div className="cart-img1">
                        <img src={b4} alt=""/>
                        <p>The martin:</p>
                        <span>Price: 240/only</span>
        
                    </div>
                    <div className="cart-img1">
                        <img src={b5} alt=""/>
                        <p>The martin:</p>
                        <span>Price: 240/only</span>
                    </div>
                    <div className="cart-img1">
                        <img src={b1} alt=""/>
                        <p>The martin:</p>
                        <span>Price: 240/only</span>
        
                    </div>
                    <div className="cart-img1">
                        <img src={b1} alt=""/>
                        <p>The martin:</p>
                        <span>Price: 240/only</span>
                    </div>
                    {/* <button class="butt butt-left">&#10095;</button>}
                </div>
            </div> */}

            {/*                                  card2 design         */}
            {/* <div className="card2">
                <h3>New Books</h3>
                <div className="card2-imgg">
                    <div className="card2-img">
                        <img src={b5} alt=""/>
                        <p>The martin:</p>
                        <span>Price: 240/only</span>
                    </div>
                    <div className="card2-img">
                        <img src={b6} alt=""/>
                        <p>The martin:</p>
                        <span>Price: 240/only</span>
                    </div>
                    <div className="card2-img">
                        <img src={b7} alt=""/>
                        <p>The martin:</p>
                        <span>Price: 240/only</span>
                    </div>
                    <div className="card2-img">
                        <img src={b8} alt=""/>
                        <p>The martin:</p>
                        <span>Price: 240/only</span>
                    </div>
                    <div className="card2-img">
                        <img src={b9} alt=""/>
                        <p>The martin:</p>
                        <span>Price: 240/only</span>
                    </div>
                    <div className="card2-img">
                        <img src={b1o} alt=""/>
                        <p>The martin:</p>
                        <span>Price: 240/only</span>
                    </div>
                    <div className="card2-img">
                        <img src={b11} alt=""/>
                        <p>The martin:</p>
                        <span>Price: 240/only</span>
                    </div>
                    <div className="card2-img">
                        <img src={b6} alt=""/>
                        <p>The martin:</p>
                        <span>Price: 240/only</span>
                    </div>
                    <div className="card2-img">
                        <img src={b9} alt=""/>
                        <p>The martin:</p>
                        <span>Price: 240/only</span>
                    </div>
                </div>
            </div> */}


            {/*                                  card3 design         */}
            {/* <div className="card3">
                <h3>Best Seller</h3>
                <div className="card3-imgg">
                    <div className="card3-img">
                        <img src={b11} alt=""/>
                        <p>The martin:</p>
                        <span>Price: 240/only</span>
                    </div>
                    <div className="card3-img">
                        <img src={b1o} alt=""/>
                        <p>The martin:</p>
                        <span>Price: 240/only</span>
                    </div>
                    <div className="card3-img">
                        <img src={b5} alt=""/>
                        <p>The martin:</p>
                        <span>Price: 240/only</span>
                    </div>
                    <div className="card3-img">
                        <img src={b6} alt=""/>
                        <p>The martin:</p>
                        <span>Price: 240/only</span>
                    </div>
                    <div className="card3-img">
                        <img src={b8} alt=""/>
                        <p>The martin:</p>
                        <span>Price: 240/only</span>
                    </div>
                    <div className="card3-img">
                        <img src={b7} alt=""/>
                        <p>The martin:</p>
                        <span>Price: 240/only</span>
                    </div>
                    <div className="card3-img">
                        <img src={b5} alt=""/>
                        <p>The martin:</p>
                        <span>Price: 240/only</span>
                    </div>
                    <div className="card3-img">
                        <img src={b11} alt=""/>
                        <p>The martin:</p>
                        <span>Price: 240/only</span>
                    </div>
                    <div className="card3-img">
                        <img src={b9} alt=""/>
                        <p>The martin:</p>
                        <span>Price: 240/only</span>
                    </div>
                </div>
            </div> */}


            {/*                   card4 design           */}
            {/* <div className="card4">
            <h3>All indian Books</h3>
                <div className="card4-imgg">
                    <div className="card4-img">
                        <img src={b11} alt=""/>
                        <p>The martin:</p>
                        <span>Price: 240/only</span>
                    </div>
                    <div className="card4-img">
                    <img src={b1o} alt=""/>
                        <p>The martin:</p>
                        <span>Price: 240/only</span>
                    </div>
                    <div className="card4-img">
                    <img src={b5} alt=""/>
                        <p>The martin:</p>
                        <span>Price: 240/only</span>
                    </div>
                    <div className="card4-img">
                    <img src={b6} alt=""/>
                        <p>The martin:</p>
                        <span>Price: 240/only</span>
                    </div>
                    <div className="card4-img">
                    <img src={b7} alt=""/>
                        <p>The martin:</p>
                        <span>Price: 240/only</span>
                    </div>
                    <div className="card4-img">
                    <img src={b8} alt=""/>
                        <p>The martin:</p>
                        <span>Price: 240/only</span>
                    </div>
                    <div className="card4-img">
                    <img src={b9} alt=""/>
                        <p>The martin:</p>
                        <span>Price: 240/only</span>
                    </div>
                    <div className="card4-img">
                    <img src={b5} alt=""/>
                        <p>The martin:</p>
                        <span>Price: 240/only</span>
                    </div>
                    <div className="card4-img">
                    <img src={b8} alt=""/>
                        <p>The martin:</p>
                        <span>Price: 240/only</span>
                    </div>
                </div>
            </div> */}


            {/*                         card5 design          */}
            {/* <div className="card5">
                <div className="textbook" style={{backgroundImage:`url(${b3})`}}></div>
                <div className="childbook" style={{backgroundImage:`url(${childbook})`}}></div>
                <div className="acbook" style={{backgroundImage:`url(${stationary})`}}></div>
                <div className="sta" style={{backgroundImage:`url(${activitybook})`}}></div>
            </div> */}
            {/*                               footer section design      */}

            {/* <div className="footer">
            <div className="track">
                <i class="fa-solid fa-truck-fast"></i>
                <div className="text">
                    <h3>Track your item.</h3>
                    <p>This will profide actualt location</p>
                </div>
            </div>
            <div className="disc">
                <i class="fa-solid fa-gift"></i>
                <div className="text">
                    <h3>Discount Coupons</h3>
                    <p>We offer Coupon card for discount</p>
                </div>
            </div>
            <div className="support">
                <i class="fa-solid fa-headphones"></i>
                <div className="text">
                    <h3>Costumer Support</h3>
                    <p>24/7 Hours support</p>
                </div>
            </div>
            <div className="pay">
                <i class="fa-solid fa-landmark"></i>
                <div className="text">
                    <h3>100% Safe Payment</h3>
                    <p>Don't worry your payment are fully safe</p>
                </div>
            </div>
        </div> */}
        {/* <!--                       footer2                     --> */}
        
        {/* <div className="footer2">
            <div className="about-content">
                <div className="textt">
                    <h2>
                        Welcome to 
                        <span style={{ fontSize: "35px", color: "#1eade1" }}> B </span>
                        <span style={{ color: "#1eade1" }}>Book {/*<FaBookOpenReader />}</span>
                    </h2>
                    <p style={{color: "rgb(191, 201, 209)"}}>BBook is your one-stop online bookstore, bringing you a wide selection of books, stationery, and more. Our mission is to make reading accessible and enjoyable for everyone.</p>
                    <p style={{color: "rgb(2, 2, 2)"}}>Explore our vast collection and find the best books for your needs. From bestsellers to academic books, we've got it all.</p>
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
            </div>   */}
                    {/* footer3  */}
            {/* <div className="footer3">
                    <div className="copy">
                        <h4>@Copyright authorised provided</h4>
                        <p>Copyright 2022 BBook. All rights reserved. that will no conrain any claim under national govt. book authorised</p>
                    </div>
                <div className="footer-content">
                    <h3>Join our other Community for information</h3>
                    <div className="social">
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-github"></i>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-linkedin"></i>
                    </div>
                </div>
            </div> */}
        </div>
    )
}
export default Navbar;
