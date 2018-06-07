import React,{PureComponent} from 'react'
import PropTypes from 'prop-types'


class TodoListItem extends PureComponent{
    constructor(props){
        super(props)
        this.handleDelete = this.handleDelete.bind(this)
    }

render(){return (
    <li>{this.props.item.label}<button  data-index={this.props.item.index} onClick={()=>this.handleDelete(this.props.index)}>Supprimer</button><input type="checkbox" value={this.props.item.done} onClick={()=>this.handleCheckboxClick(this.props.index)}/></li>)
}

handleDelete(index){
    this.props.onDelete(index)
    document.getElementById('addItemInput').value=''
}

handleCheckboxClick(index){
    this.props.onToggle(index)
}

}

TodoListItem.propTypes = {
    onDelete : PropTypes.func.isRequired
}


export default TodoListItem