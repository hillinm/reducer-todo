import React, { useState } from 'react';
import './AddToDo.css'


const AddToDoForm = (props) => {
    const [formState, setFormState] = useState({
        todo: ""
    })

    const initialState = {
        todo: ""
    }

    const handleChanges = (e) => {
        const addNew = {
        ...formState, [e.target.name]: e.target.value
    }
    setFormState(addNew);
    }

    const handleSubmit = (e) => {
        setFormState(initialState);
        props.addTask(e, formState.todo)
    }

    return (
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder="What's Else, Dear?"
            name="todo"
            value = {formState.todo}
            onChange = {handleChanges}
        />
        <button>Add To List</button>
        </form>
    )
}

export default AddToDoForm;