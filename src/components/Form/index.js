import { connect } from 'react-redux'
import Form from './presentational'
import {addTodo} from 'store/ducks/todos'

const mapStateToProps = (state)=> ({})

const mapDispatchToProps= (dispatch) =>({
    
        onSubmit: (label) => {dispatch(addTodo(label))}
    })
    


export default connect(mapStateToProps,mapDispatchToProps)(Form)