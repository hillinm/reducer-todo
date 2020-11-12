import React from 'react';

const DeleteCompleted = (props) => {
    return (
    <div>
        <button onClick = {props.deleteTask}>
            Clear Completed Task
        </button>
    </div>
    )
}

export default DeleteCompleted;