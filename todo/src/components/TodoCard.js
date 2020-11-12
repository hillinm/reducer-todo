import React, { useState, useReducer } from 'react';
import AddToDo from './AddToDo'
import './TodoCard.css';

import {
    initialState,
    reducer
} from '../reducers/reducer'

const TodoCard = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    console.log(state)

    return (
    <div className="container">
        <div className="card">
            <h1>Honey Do List</h1>
            {state.todos.map(e => {
                return (
                <p>{e.item}</p>
                )
            })}
        </div>
        <AddToDo />
    </div>
    )
};

export default TodoCard;