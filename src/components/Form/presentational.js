import React,{PureComponent} from 'react'
import PropTypes from 'prop-types'

class Form extends PureComponent{
    constructor(props){
        
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

render(){
    return(
    <form onSubmit={this.handleSubmit}>
        <input type="text" id="addItemInput"/>
        <input type="Submit"  value="Ajouter" />
    </form>)
}

handleSubmit(e){
    e.preventDefault()
    this.props.onSubmit(document.getElementById('addItemInput').value)
    document.getElementById('addItemInput').value=''

}
}

Form.propTypes = {
    onSubmit : PropTypes.func.isRequired
}

export default Form