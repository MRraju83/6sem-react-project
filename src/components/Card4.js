import './Card4.css';
import './Responsive.css';
import b5 from '../images/b5.jpg';
import b6 from '../images/b6.jpg';
import b7 from '../images/b7.jpg';
import b8 from '../images/b8.jpg';
import b9 from '../images/b9.jpg';
import b1o from '../images/b1o.jpg';
import b11 from '../images/b11.jpg';
function Card4(){
    return(
        <div>
            <div className="card4">
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
            </div>
        </div>
    )
}
export default Card4;