import b1 from '../images/b1.jpg';
import b2 from '../images/b2.jpg';
import b3 from '../images/b3.jpg';

function MyOrder(){
    return (
        <div>
            <div className="order" id="popbox">
            <h2>order </h2>
            <div className="book-item1">
                <div className="img">
                    <img src={b1} alt="Book" className="book-image"/>
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
                    <button type="button">Track Order:</button>
                </div>
            </div><hr/>
            <div className="book-item1">
                <div className="img">
                    <img src={b2} alt="Book" className="book-image"/>
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
                    <button type="button">Track Order:</button>
                </div>
            </div><hr/>
            <div className="book-item1">
                <div className="img">
                    <img src={b3} alt="Book" className="book-image"/>
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
                    <button type="button">Track Order:</button>
                </div>
            </div>
        </div>
        </div>
    )
}
export default MyOrder;