
import * as React from 'react';

type MessagePropsType = {
    id: number
    title: string
    work: string
}


export const Message = (props: MessagePropsType) => {
    return (
        <div>
            <ul>
                <li key={props.id}>{props.title} -  { props.work}</li>
            </ul>
        </div>
    );
};