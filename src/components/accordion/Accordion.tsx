import React, {useState} from 'react';

type AccordionProps = {
    titleValue: string


}

export const Accordion = (props: AccordionProps) => {

    let [toggle, setToggle] = useState(false);

    function toggleOn() {
        setToggle(!toggle);
    }

    return (
        <div>
            <AccordionTitle title={props.titleValue}/>
            <button onClick={toggleOn}>Toggle</button>
            {toggle && <AccordionBody/>}
        </div>
    )

};

type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    debugger
    return (
        <h3>{props.title}</h3>
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