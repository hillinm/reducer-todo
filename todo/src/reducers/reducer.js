export const ADD = "ADD";
export const TOGGLE = "TOGGLE";
export const DELETE = "DELETE";

export const initialState = {
    todos: [
        {
            item: 'Learn about reducers',
            completed: false,
            id: 3892987589
        },
        {
            item: 'Clean the kitchen',
            completed: false,
            id: 3892987590
        },
        {   
            item: 'Fold Laundry',
            completed: false,
            id: 3892987591

        }
    ],
};
export const reducer = (state, action) => {
    console.log(state.todos)
    switch (action.type) {
        case "ADD":
            const newToDo = {
                item: action.payload,
                completed: false,
                id: Date.now()
            };
        return {
            ...state,
            todos: [...state.todos, newToDo]
        };
        case "TOGGLE":
            return {
                ...state,
                todos: state.todos.map(item => {
                    if (action.payload === item.id) {
                        return {
                            ...item,
                            completed: !item.completed
                        };
                    }
                    return item;
                })
            }
        case "DELETE":
            return {
                ...state,
                todos: state.todos.filter(task => !task.completed)
            }
        default:
            return state;
    }
}