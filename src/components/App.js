import React from 'react'
import TodoList from './TodoList/index'
import Form from './Form/index'
import Filters from './Filters/index'

const App= (props) => (
    <div>
        <Filters/>
        <Form />
        <TodoList/>
    </div>
)

export default App