import React, {useState} from 'react';


export const Rating = () => {

    let [stars, setStars] = useState([false, false, false, false, false]);

    function StarCelebrate(index: number) {
        const updatedStars = stars.map((star, i) => (i === index ? !star : star));
        setStars(updatedStars);
    }




    return (
        <div>
            {
                stars.map((star, i) => (
                    <div key={i}>
                        <span>{star ? <b>star</b> : "star"}</span>
                        <button onClick={()=>StarCelebrate(i)}>Toggle</button>
                    </div>
                ))}

        </div>
    )}



