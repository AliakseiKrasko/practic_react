import * as React from 'react';
import {useState} from 'react';

type PropsType = {
    //on: boolean
};
export const OnOf = (props: PropsType) => {

    let [on, setOn] = useState(false)

    const OnStyle  = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        background: on ? "green" : "white",

    }

    const OfStyle  = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "3px",
        background: on ? "white" : "red",

    }

    const IndicatorStyle = {
        width: "15px",
        height: "15px",
        borderRadius: "15px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        background: on ? "green" : "red",
    }



    return (
        <div>
            <div style={OnStyle} onClick={ () => setOn(true) }>On</div>
            <div style={OfStyle} onClick={ () => setOn(false) }>Off</div>
            <div style={IndicatorStyle}></div>
        </div>
    );
};