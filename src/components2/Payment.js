import React, { useState ,} from 'react';
import { useNavigate } from 'react-router-dom';
import './Payment.css'; // Keep your CSS file
import Navber3 from './Navber3';

function Payment() {
    const [selectedPayment, setSelectedPayment] = useState(null);

    const selectPayment = (method) => {
        setSelectedPayment(method);
    };
    const [isConfirmed, setIsConfirmed] = useState(false);

    const openc = () => {
        setIsConfirmed(true);
    };
    const navigate = useNavigate();
    const closeP = () => {
        navigate('/Order');
    };
    return (
        <div>
            <Navber3 />
            <div className={`connt3 ${isConfirmed ? "blur" : ""}`}>
            <div className="connt3-d">
                <h2 style={{fontSize:"15px", color:"red"}}>PAYMENT METHOD</h2>
                <span className="close-btn" onClick={closeP}>X</span>
            </div>

            {["VISA CARD", "Google Pay", "MASTER CARD", "PAYPAL", "VOUCHER"].map((method, index) => (
                <div
                    key={index}
                    className={`paymentt-option ${selectedPayment === method ? "selected" : ""}`}
                    onClick={() => selectPayment(method)}
                >
                    <img
                        src={
                            method === "VISA CARD"
                                ? "https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
                                : method === "Google Pay"
                                ? "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Google_Pay_Logo.svg/768px-Google_Pay_Logo.svg.png"
                                : method === "MASTER CARD"
                                ? "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                                : method === "PAYPAL"
                                ? "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                                : "https://upload.wikimedia.org/wikipedia/commons/d/d6/Dollar_Sign.svg"
                        }
                        alt={method}
                    />
                    <span>{method}</span>
                </div>
            ))}
            <button className="next-button" onClick={openc}>Confirm →</button>
        </div>
         {/* Show conf div only when isConfirmed is true */}
         {isConfirmed && (
            <div className="conf">
                <h2>ORDER CONFIRM</h2>
                <span>✔</span>
            </div>
        )}
        </div>
    );
}

export default Payment;
