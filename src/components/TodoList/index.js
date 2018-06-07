import { connect } from 'react-redux'
import TodoList from './presentational'

const mapStateToProps = (state)=>({
    values: state.todos.values,
    filters: state.filters.active
})


export default connect(mapStateToProps)(TodoList)