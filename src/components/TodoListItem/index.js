import { connect } from 'react-redux'
import TodoListItem from './presentational'
import { deleteTodo } from 'store/ducks/todos'
import { toggleTodo } from '../../store/ducks/todos'

const mapStateToProps = (state)=>({
})

const mapDispatchToProps = (dispatch) =>({
    onDelete: (index) => {dispatch(deleteTodo(index))},
    onToggle: (index) =>{dispatch(toggleTodo(index))}
})

export default connect(mapStateToProps,mapDispatchToProps)(TodoListItem)