import React, {ChangeEvent, useState} from 'react';
import {KeyboardEvent} from 'react';
import './App.css';
import {Message} from './Message';
import {OnOf} from './components/onOf/OnOf';
import {Rating} from './components/rating/Rating';

type Task = {
    id: number
    name: string
}


function App() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [newTasks, setNewTasks] = useState('');

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTasks(e.currentTarget.value);
    }

    const addTaskHandler = () => {
        if (newTasks.trim() !== "") {
            const newTask: Task = {id: tasks.length + 1, name: newTasks};
            setTasks([newTask, ...tasks])
            setNewTasks("")
        }

    }

    const removeTask = (id: number) => {
        setTasks(tasks.filter((task) => task.id !== id))


    }

    const onKeyDownHundler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addTaskHandler();
        }
    }

    const [count, setCount] = useState(0);
    const buttonPlusHandler = () => {
        // const count = 0;
        setCount(count + 1);
    }

    const buttonMinusHandler = () => {
        setCount(count - 1);
    }

    const buttonResetHandler = () => {
        setCount(0);

    }


    const messages = [
        {id: 1, title: 'Alex', work: 'student'},
        {id: 2, title: 'Dima', work: 'driver'},
        {id: 3, title: 'Petya', work: 'developer'},
        {id: 4, title: 'Igor', work: 'policy'},
        {id: 5, title: 'Anna', work: 'doctor'},
        {id: 6, title: 'Kiril', work: 'manager'}
    ]

    return (
        <div className="App">
            <div className="AppHeader">
                <input onChange={onChangeHandler} value={newTasks} onKeyDown={onKeyDownHundler}></input>
                <button onClick={addTaskHandler}>Add</button>
            </div>

            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>{task.name}
                        <button onClick={() => removeTask(task.id)}>Remove Message</button>
                    </li>

                ))}
            </ul>
            <div>
                <h1>{count}</h1>
                <button onClick={buttonPlusHandler}>+</button>
                <button onClick={buttonMinusHandler}>-</button>
                <button onClick={buttonResetHandler}>Reset</button>
            </div>
            {messages.map((message) => (
                <Message id={message.id} title={message.title} work={message.work}/>
            ))}
            <OnOf/>
            <OnOf/>
            <OnOf/>
            <OnOf/>
            <Rating/>
        </div>
    );
}

export default App;
