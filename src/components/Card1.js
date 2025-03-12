import './Card1.css';
import './Responsive.css';
import b1 from '../images/b1.jpg';
import b2 from '../images/b2.jpg';
import b3 from '../images/b3.jpg';
import b4 from '../images/b4.jpg';
import b5 from '../images/b5.jpg';
function Card1() {
  return (
    <div>
        <div className="card">
        <h2 className="h22">Hot deal start here</h2>
        <div className="card-box">
            <h2>Hot Deal </h2>
            <h3>2:3:00 count</h3>
            <strong>The hot deal is starting</strong>
        </div>
        <div className="cart-img">
            {/* <button class="butt butt-right">&#10094;</button> */}
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
            {/* <button class="butt butt-left">&#10095;</button> */}
        </div>
    </div>
    </div>
  );
}
export default Card1;