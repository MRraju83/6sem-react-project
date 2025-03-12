import './Card5.css';
import './Responsive.css';
import childbook from '../images/childbook.png';
import stationary from '../images/stationary.png';
import activitybook from '../images/activitybook.png';
import b3 from '../images/b3.jpg';
function Card5(){
    return(
        <div>
            <div className="card5">
                <div className="textbook" style={{backgroundImage:`url(${b3})`}}></div>
                <div className="childbook" style={{backgroundImage:`url(${childbook})`}}></div>
                <div className="acbook" style={{backgroundImage:`url(${stationary})`}}></div>
                <div className="sta" style={{backgroundImage:`url(${activitybook})`}}></div>
            </div>
        </div>
    )
}
export default Card5;