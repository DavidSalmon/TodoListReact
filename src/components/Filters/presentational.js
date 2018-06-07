import React,{PureComponent} from 'react'

class Filters extends PureComponent{
    constructor(props){
        super(props)
        this.handleCheckboxClick = this.handleCheckboxClick.bind(this)
    }

    render(){
        return(
            <div>
            Show completed
            <input type="Checkbox" id="filter" name="" onClick={this.handleCheckboxClick}/>
            </div>
        )
    }

    handleCheckboxClick(ev){
        this.props.updateFilter(ev.target.checked? 'SHOW_COMPLETED':'SHOW_ALL')
    }


}

export default Filters