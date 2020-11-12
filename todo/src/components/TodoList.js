import React from 'react';
import './TodoList.css';

const TodoList = (props) => {
    console.log(props.data)

    return (
        <div>
        {props.data.map((e) => {
            console.log(e)
            return (
            <div
            key = {e.id}
            onClick= {() => props.toggleTask(e.id)}
            className={`${e.completed ? "completed" : "incomplete"}`}
            >
            <p>{e.item}</p>
            </div>
            )
        })}
        </div>
    )
}

export default TodoList