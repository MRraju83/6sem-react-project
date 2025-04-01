import b4 from '../images/b4.jpg';
import b5 from '../images/b5.jpg';
import b6 from '../images/b6.jpg';
function Cart(){
    return(
        <div className="cart" id="popcart">
            <h2 style={{color:"#00bcd4"}}>Your Bag</h2>
            <div className="book-item1">
                <div className="img">
                    <img src={b4} alt="Book" className="book-image"/>
                    <div className="book-actions">
                        <label for="qty1">Qty:</label>
                        <select id="qty1" className="qty-select">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                    </div>
                </div>
                <div className="book-info">
                    <div className="book-title">Adiyogi: The Source Of Yoga</div>
                    <div className="book-author">by <strong>Sadhguru, Arundhathi Subramaniam</strong> (Author), <strong>Harper Collins India</strong> (Publisher)</div>
                    <div className="book-price">15% Off • <strike>₹299</strike> • ₹255</div>
                    <div className="book-rating">⭐⭐⭐⭐ (1,000+)</div>
                    <div className="stock-info">2 offers available</div>
                    <a href="Address.htm"><button type="button">Order now:</button></a>
                </div>
            </div><hr/>
            <div className="book-item1">
                <div className="img">
                    <img src={b5} alt="Book" className="book-image"/>
                    <div className="book-actions">
                        <label for="qty1">Qty:</label>
                        <select id="qty1" className="qty-select">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                    </div>
                </div>
                <div className="book-info">
                    <div className="book-title">Adiyogi: The Source Of Yoga</div>
                    <div className="book-author">by <strong>Sadhguru, Arundhathi Subramaniam</strong> (Author), <strong>Harper Collins India</strong> (Publisher)</div>
                    <div className="book-price">15% Off • <strike>₹299</strike> • ₹255</div>
                    <div className="book-rating">⭐⭐⭐⭐ (1,000+)</div>
                    <div className="stock-info">2 offers available</div>
                    <button type="button">Order now:</button>
                </div>
            </div><hr/>
            <div className="book-item1">
                <div className="img">
                    <img src={b6} alt="Book" className="book-image"/>
                    <div className="book-actions">
                        <label for="qty1">Qty:</label>
                        <select id="qty1" className="qty-select">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                    </div>
                </div>
                <div className="book-info">
                    <div className="book-title">Adiyogi: The Source Of Yoga</div>
                    <div className="book-author">by <strong>Sadhguru, Arundhathi Subramaniam</strong> (Author), <strong>Harper Collins India</strong> (Publisher)</div>
                    <div className="book-price">15% Off • <strike>₹299</strike> • ₹255</div>
                    <div className="book-rating">⭐⭐⭐⭐ (1,000+)</div>
                    <div className="stock-info">2 offers available</div>
                    <button type="button">Order now:</button>
                </div>
            </div>
        </div>
    )
}
export default Cart;