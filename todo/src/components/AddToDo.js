import React from 'react';
import './AddToDo.css'

const AddToDo = () => {
    return (
        <form onSubmit="return false">
        <input
            type="text"
            placeholder="What's Else, Dear?"
            id = "text"
        />
        <button>Add To List</button>
        </form>
    )
}

export default AddToDo