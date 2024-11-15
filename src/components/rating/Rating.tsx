import React from 'react';

export const Rating = () => {
    return (
        <div>
           <Star />
           <Star />
           <Star />
           <Star />
           <Star />
        </div>
    );
};



function Star() {
    return <span>star </span>
}

