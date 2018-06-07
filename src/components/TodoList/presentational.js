import React,{Component} from 'react'
import {connect} from 'react-redux'
import TodoListItem from '../TodoListItem/index'

const TodoList = (props) =>(
    
    <div>{props.filters}
    <ul>
        {
            props.values.map((val,i)=>{
                if(props.filters==='SHOW_ALL' || (props.filters!=='SHOW_ALL' && val.done===true)){
                    return (<TodoListItem key={i} item={val} index={i}  />)
                }
            })
        }
    </ul>
    </div>
)

export default TodoList