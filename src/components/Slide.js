import React, { useRef, useEffect } from 'react';
import './Slide.css';
import './Responsive.css';
import sc1 from '../images/sc1.png';
import sc2 from '../images/sc2.png';
import sc3 from '../images/sc3.png';
import sc4 from '../images/sc4.png';
import sc5 from '../images/sc5.png';

function Slide() {
    const imageBoxRef = useRef(null);
    const images = [sc1, sc2, sc3, sc4, sc5];

    function scrollLeft() {
        if (imageBoxRef.current) {
            if (imageBoxRef.current.scrollLeft === 0) {
                // Jump to last image
                imageBoxRef.current.scrollLeft = imageBoxRef.current.scrollWidth;
            } else {
                imageBoxRef.current.scrollLeft -= imageBoxRef.current.clientWidth;
            }
        }
    }

    function scrollRight() {
        if (imageBoxRef.current) {
            if (
                imageBoxRef.current.scrollLeft + imageBoxRef.current.clientWidth >=
                imageBoxRef.current.scrollWidth
            ) {
                // If at last image, restart from first
                imageBoxRef.current.scrollLeft = 0;
            } else {
                imageBoxRef.current.scrollLeft += imageBoxRef.current.clientWidth;
            }
        }
    }

    // Auto-scroll every 3 seconds
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         scrollRight();
    //     }, 3000);

    //     return () => clearInterval(interval);
    // }, []);

    return (
        <div className="slid">
            <button className="btn btn-left" onClick={scrollLeft}>&#10094;</button>
            <div className="image-box" ref={imageBoxRef}>
                {images.map((image, index) => (
                    <img key={index} src={image} alt='' />
                ))}
            </div>
            <button className="btn btn-right" onClick={scrollRight}>&#10095;</button>
        </div>
    );
}

export default Slide;
