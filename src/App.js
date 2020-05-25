 import React from "react"
 import "./App.css"
 import "./TodoItem.css" 
import TodoItem from "./TodoItem"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash, faCheck } from '@fortawesome/free-solid-svg-icons'


library.add(faTrash, faCheck);

 class App extends React.Component{

    constructor(props){
        super(props)
        this.state={
            items:[],
            currentItem:{
                text: "",
                key:'' 
            }
        }
        this.handleInput = this.handleInput.bind(this)
        this.addItem = this.addItem.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
        this.updateItem= this.updateItem.bind(this)
        this.completeItem = this.completeItem.bind(this)
        
    }
    handleInput(e){
        this.setState({
            currentItem: {
                text: e.target.value,
                key: Date.now()
            }
        })
    }

    deleteItem(key){
        console.log("Function Delete Item ")
        const filteredItems = this.state.items.filter(item => item.key!== key)
        this.setState({
            items: filteredItems
        })

    }

    addItem(e){
        e.preventDefault();
        const newItem = this.state.currentItem
      if(newItem.text !==""){
           const newItems = [...this.state.items, newItem]
           this.setState({
               items: newItems,
              
               currentItem: {
                   text: '',
                   key: '',
                   isComplete: false
               }
           })
          
        }
    }

    updateItem(text, key){
        let items = this.state.items;
        items.map(item=>{
            if(item.key===key)
            item.text=text
        })
        this.setState({
            items: items
        })
    }

    completeItem(key){
        const items = this.state.items

        items.map(item =>  {
            if(item.key===key)
            {
                item.isComplete = !item.isComplete
             
            }
        })

        this.setState({
            items: items
        })

    }
    render(){
        return(

            <div className="App">
                <header>
                    <form id="to-do-form" onSubmit={this.addItem}>
                        <input type="text" placeholder="Enter Text Here"
                        value={this.state.currentItem.text}
                        onChange = {this.handleInput}
                        />
                        <button type="submit">Add</button>

                    </form>
                    <TodoItem items= {this.state.items}
                        deleteItem ={this.deleteItem} 
                        updateItem = {this.updateItem}
                        completeItem = {this.completeItem}
                    />
                 </header>
            </div>
        )
    }
 }
 export default App