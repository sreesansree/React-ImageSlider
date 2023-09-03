import React, { useState } from 'react';
import './Slider.css';
import { GrNext, GrPrevious } from 'react-icons/gr';

function Slider(props) {
    const { url } = props;
    const length = url.length - 1;
    const [index, setIndex] = useState(0);
    const handlePrev = () => {
        index == 0 ? setIndex(length) : setIndex(index - 1);
    }
    const handleNext = () => {
        index == length ? setIndex(0) : setIndex(index + 1);
    }
    return (
        <div className="container">
            <div className="imageContainer">
                <GrPrevious className='icons' onClick={handlePrev} />
               <img src={url[index]} alt="s" />
                <GrNext stroke-width={'3em'} className='icons' onClick={handleNext} />
            </div>
           <div className="bars">
            {url.map((url,i)=>(<div onClick={()=>
            {setIndex(i)}} key={i} className={`${index==i?'barWhite':''}`}>_</div>
            ))}
           </div>
        </div>
    );
}

export default Slider;
