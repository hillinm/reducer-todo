import React from 'react';
import './TodoList.css';

const TodoList = (props) => {
    console.log(props.data)

    return (
        <div>
        {props.data.map(e => {
            return (
            <div
            onClick= {() => props.toggleTask(props.data.id)}
            className={`${props.data.completed ? "completed" : "incomplete"}`}
            >
            <p>{e.item}</p>
            </div>
            )
        })}
        </div>
    )
}

export default TodoList