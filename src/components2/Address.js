import './Address.css';
import b12 from '../images/b12.jpg';
import Navber3 from './Navber3';
import { Link } from 'react-router-dom';
function Address(){
    return (
        <div id='main'>
            <Navber3 />
            <div className="main">
                <div className="container1">
                    <div className="cont">
                        <div className="header">
                            <a href="BuyBook.htm"><i className="fa-solid fa-arrow-left"></i></a><span>Address Summary</span>
                        </div>
                        <div className="form-group">
                            <label for="address">Full Name:</label>
                            <input type="text" placeholder="Full Name"/>
                        </div>
                        <div className="form-group1">
                            <label for="address">Address:</label>
                            <textarea name="address" id="adddress" cols="65" rows="5"></textarea>
                        </div>
                        <div className="form-group">
                            <label for="address">Building House Number:</label>
                            <input type="text" placeholder="Building House Number"/>
                        </div>
                        <div className="form-group">
                            <label for="address">State:</label>
                            <input type="text" placeholder="State"/>
                        </div>
                        <div className="form-group">
                            <label for="address">Mobile Number:</label>
                            <input type="text" placeholder="Mobile Number"/>
                        </div>
                        <Link to="/Order"><button className="submit-btn">Submit</button></Link>
                    </div>
                    <div className="immg1">
                        <img src={b12} alt=""/>
                    </div>
                </div>
            </div>

             {/* html structure model for payment section */}
            {/* <div className="modal" id="popupBox">
                <span className="close" onclick="closeModal()">&times;</span>
                <span>Choose payemnt method</span>
                <div className="pay">
                    <span>1.online paymeny</span>
                    <ul>
                        <li><input type="radio"/>Gpay</li>
                        <li><input type="radio"/>PhonePay</li>
                        <li><input type="radio"/>Amazone Pay</li>
                        <li><input type="radio"/>PayPal</li>
                    </ul>
                    <ul><li><input type="checkbox" name="" id=""/>2.Case on Delivery</li></ul>
                    <ul><li><input type="checkbox" name="" id=""/>3.Net Banking</li></ul>
                </div>
            </div> */}
        </div>
    )
}
export default Address;