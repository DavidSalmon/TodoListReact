import { createStore, combineReducers } from 'redux'
import * as todos from 'store/ducks/todos'
import * as filters from 'store/ducks/filters'

const rootReducer = combineReducers({
    todos: todos.default,
    filters: filters.default
})

const store = createStore(rootReducer)

export default store