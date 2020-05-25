import React from "react"
import "./TodoItem.css" 
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
function TodoItem(props) {

    const items = props.items
    const listItems = items.map((item)=>
        {
            return <div className="list" key={item.key}>
                <p>
                <FontAwesomeIcon  className="faicons" icon='check' onClick = {()=> props.completeItem(item.key)} />
                <input   
                    style={{
                        textDecoration: item.isComplete ?"line-through" : ""
                    }}
                    type="text" 
                    id={item.key} 
                    value={item.text}
                    onChange = {(e) => props.updateItem(e.target.value, item.key) }
                  
                    />
                <span> 
                <FontAwesomeIcon className="faicons" icon='trash' onClick = {()=>props.deleteItem(item.key)}/>
                </span>
                </p>
            </div>
        })


    return(
   
            <div>
                {listItems}
            </div>
        
    )
    }

export default TodoItem