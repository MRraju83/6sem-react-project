import Navber3 from "./Navber3";
import b1 from '../images/b1.jpg';
import b3 from '../images/b3.jpg';
import './Orders.css';
function Oders() {
    return (
        <div>
            <Navber3 />
            <div className="container1">
                <div className="cont">
                    <div className="header">
                        <a href="Address.htm"><i className="fa-solid fa-arrow-left"></i></a><span>Order Summary</span>
                    </div>
                    <div className="order-details">
                        <span>Delevery to:</span>
                        <span>Raju Kumar</span>
                        <span>RK University Tramba</span>
                    </div>
                    <div className="order-detailss">
                        <img className="order-image" src={b1} alt="Book"/>
                        <div className="order-detailsss">
                            <span>Aditi : Books for yoga</span>
                            <span>By shadguru is our outhor books for yoga in </span>
                            <div className="rating">⭐⭐⭐⭐ 4.5 (338 Customers)</div>
                            <div className="pp">
                                <p><i className="fa-solid fa-arrow-down" style={{color: "red"}}></i><s>210</s>(300)</p>
                            </div>
                            <div className="off">
                                <span style={{ marginTop:"30px"}}>2 offers available</span>
                            </div>
                        </div>
                    </div>
                    <div className="quantity">
                        <label for="qty">Qty:</label>
                        <select id="qty">
                            <option value="1">1</option>
                            <option value="1">2</option>
                            <option value="1">3</option>
                        </select>
                    </div>
                    <div className="p">
                        <p className="express-delivery">Express Delivery by tomorrow. <span className="strike">₹79</span> <span className="free">FREE</span></p>
                        <p className="bank-offers">Continue to the next page for Bank Offers</p>
                    </div>
                    <div className="price-details">
                        <h3>Price Details</h3>
                        <div className="row">
                            <span className="sp">Price (1 item):</span>
                            <span>₹299</span>
                        </div>
                        <div className="row discount">
                            <span className="sp">Discount:</span>
                            <span>- ₹45.85</span>
                        </div>
                        <div className="row">
                            <span className="sp">Platform Fee:</span>
                            <span>₹3</span>
                        </div>
                        <div className="row">
                            <span className="sp">Delivery Charges:</span>
                            <span><span style={{fontSize: "12px", textDecoration:"line-through"}}>₹79</span> <span style={{color: "#00bcd4"}}>Free Delivery</span></span>
                        </div><hr/>
                        <div className="row total">
                            <span className="sp">Total Amount:</span>
                            <span>₹255</span>
                        </div>
                        <button className="order-btn" onClick="Openp()">Order</button>
                    </div>
                </div>
                <div className="immg2">
                    <img src={b3} alt=""/>
                </div>
                
            </div>
        </div>
    )
}
export default Oders;