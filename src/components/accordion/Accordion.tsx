import React, {useState} from 'react';

type AccordionProps = {
    titleValue: string


}

export const Accordion = (props: AccordionProps) => {

    let [toggle, setToggle] = useState(false);

    return (
        <div style={{cursor: 'pointer' }}>
            <AccordionTitle title={props.titleValue} onClick={()=>setToggle(!toggle)}/>

            {toggle && <AccordionBody/>}
        </div>
    )

};


type AccordionTitlePropsType = {
    title: string
    onClick: () => void;
}

function AccordionTitle(props: AccordionTitlePropsType) {
    debugger
    return (
        <h3 onClick={props.onClick}>{props.title}</h3>
    )
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}