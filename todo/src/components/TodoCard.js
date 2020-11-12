import React, { useState, useReducer } from 'react';
import AddToDo from './AddToDo';
import TodoList from './TodoList';
import './TodoCard.css';

import {
    initialState,
    reducer,
    ADD,
    DELETE,
    TOGGLE
} from '../reducers/reducer'

const TodoCard = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const addTask = (e, data) => {
        e.preventDefault();
        dispatch({ type: ADD, payload: data });
      };

    const toggleTask = (taskId) => {
        dispatch({ type: TOGGLE, payload: taskId})
    }

    const deleteTask = (e) => {
        e.preventDefault();
        dispatch({type: DELETE });
    };
    console.log(state.todos)

    return (
    <div className="container">
        <div className="card">
            <h1>Honey Do List</h1>
            <div className="item">
            <h4>(checkbox to complete)</h4>
            <TodoList
            data = {state.todos}
            toggleTask = {toggleTask}
            deleteTask ={deleteTask}
            />
            </div>
        </div>
        <AddToDo addTask = {addTask}/>
    </div>
    )
};

export default TodoCard;