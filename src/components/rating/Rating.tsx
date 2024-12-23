import {useState} from 'react';

type RatingPropsType = {
    // value: 0 | 1 | 2 | 3 | 4 | 5


}

export const Rating = (props: RatingPropsType) => {

    let [value, setValue] = useState(0)



    return (
        <div>
            <Star selected={value > 0} onClick={()=>setValue(1)}/>
            {/*<button onClick={() => setValue(1)}>1</button>*/}
            <Star selected={value > 1} onClick={()=>setValue(2)}/>
            {/*<button onClick={() => setValue(2)}>2</button>*/}
            <Star selected={value > 2} onClick={()=>setValue(3)}/>
            {/*<button onClick={() => setValue(3)}>3</button>*/}
            <Star selected={value > 3} onClick={()=>setValue(4)}/>
            {/*<button onClick={() => setValue(4)}>4</button>*/}
            <Star selected={value > 4} onClick={()=>setValue(5)}/>
            {/*<button onClick={() => setValue(5)}>5</button>*/}
        </div>
    );
}

type StarPropsType = {
    selected: boolean
    onClick: () => void
}

function Star(props: StarPropsType) {
    return (
        <span onClick={props.onClick} style={{cursor: 'pointer', marginRight: '5px'}}>{props.selected ? <b>star</b> : "star"}</span>
    )


}

