import React, { useReducer } from 'react';
import AddToDo from './AddToDo';
import TodoList from './TodoList';
import DeleteCompleted from './DeleteCompleted';
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
            <h4>(click on a task to mark it completed)</h4>
            <TodoList
            data = {state.todos}
            toggleTask = {toggleTask}
            />
            </div>
        </div>
        <AddToDo addTask = {addTask}/>
        <DeleteCompleted
        deleteTask = {deleteTask}
        />
    </div>
    )
};

export default TodoCard;