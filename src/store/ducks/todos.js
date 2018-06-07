//Actions
export const ADD_TODO = "my-todo/TODOS/ADD_TODO"
export const DELETE_TODO = 'my-todo/TODOS/DELETE_TODO'
export const TOGGLE_TODO = 'my-todo/TODOS/TOGGLE_TODO'

// Reducer
const initial = {
    values: [],
    pages: 0
}

export default function reducer (state = initial, action = {}) {
    console.log(action.type)
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                values: state.values.concat({
                    label: action.label,
                    done: false
                })
            }
        case DELETE_TODO:
            state.values.splice(action.index, 1)
            return {
                ...state,
                values:[].concat(state.values)
            }
        case TOGGLE_TODO:
            state.values[action.index].done =!state.values[action.index].done
            console.log(state.values[action.index])
            return {
                ...state,
                values:[].concat(state.values)
            }
        
        default:
            return state
    }
}

// Actions creators
export const addTodo = (label) => ({
    type: ADD_TODO,
    label
})

export const deleteTodo = (index) =>({
    type: DELETE_TODO,
    index
})

export const toggleTodo = (index) =>({
    type: TOGGLE_TODO,
    index
})