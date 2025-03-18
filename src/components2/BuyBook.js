import './BuyBook.css';
import { useState } from 'react';
import b1 from '../images/b1.jpg';
import b2 from '../images/b2.jpg';
import b3 from '../images/b3.jpg';
import sc6 from '../images/sc6.png';
import Rating from '../images/Rating.png';

import Navbar from '../components/Navbar';
import Navbar2 from '../components/Navbar2';
import Card2 from '../components/Card2';
import Footer from '../components/Footer';

import { Link } from 'react-router-dom';



function BuyBook(){
    const [largeImage, setLargeImage] = useState(b3);
    const changeImage = (image) => {
        setLargeImage(image);
    }
    return(
        <div>
            <div className="main" id="main">
                <Navbar />
                <Navbar2 />
                <div className="buy">
                    <div className="byimg">
                    <div className="allD">
                        <div className="smallimg">
                        <div className="img1">
                            <img src={b2} alt="" onClick={() => changeImage(b2)}/>
                        </div>
                        <div className="img1">
                            <img src={b3} alt="" onClick={() => changeImage(b3)}/>
                        </div>
                        <div className="img1">
                            <img src={b2} alt="" onClick={() => changeImage(b2)}/>
                        </div>
                        </div>
                        <div className="bigimg">
                        <img id="large" src={largeImage} alt="Large Preview" />
                        </div>
                    </div>
                        <div className="btan">
                            <Link to="/Address"><button>Buy Now</button></Link>
                            <Link to="/Cart"><button>Add to Cart</button></Link>
                        </div>
                    </div>
                    <div className="byd">
                        <div className="dd">
                            <h1>Aditi : Books for yoga day in day</h1>
                            <span>Hello this is our outhor books for yoga in asy in exy</span>
                            <div className="rating">⭐⭐⭐⭐ 4.5 (338 Customers)</div>
                        </div>
                        <div className="pp">
                            <span style={{fontSize:"20px", color:"red"}}>$210-/ only</span>
                            <span><s>300</s>(20% off)</span>
                            <p>Include all taxes</p>
                        </div>
                        <div className="qq">
                        <span>Our Services</span>
                        <div className="boox">
                            <img src={sc6} alt=""/>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="DB">
                    <h2>Product Specifications</h2>
                    <h3>Book Description</h3>
                    <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                        Molestiae quasi optio accusantium ducimus dignissimos 
                        eligendi sit dolore eos, voluptatibus et ratione doloremque 
                        deleniti ipsum facilis quas saepe quia libero cum!
                        Molestiae quasi optio accusantium ducimus dignissimos 
                        eligendi sit dolore eos, voluptatibus et ratione doloremque 
                        deleniti ipsum facilis quas saepe quia libero cum!
                    </span>
                </div>
                <div className="RR">
                    <h2>Ratings & Reviews</h2>
                    <div className="Rating">
                        <img src={Rating} alt=""/>
                    </div>
                </div>
                <Card2 />
                <Footer />
            </div>
        </div>
    )
}
export default BuyBook;