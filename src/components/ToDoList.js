import React from 'react'
import ToDoForm from './ToDoForm';
import '../components/ToDo.css';
import ToDo from './ToDo';

class ToDoList extends React.Component{

    state = {
        todos: [],
        todoToShow: 'all'
    }

    addTodo = (todo) => {
        const newTodos = [todo, ...this.state.todos]
        this.setState({
          todos: newTodos
        })
    }

    toggleComplete = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if(todo.id === id) {
                    return {
                        ...todo,
                        complete: !todo.complete
                    }
                }else{
                    return todo;
                }
            })
        })
    }

    updateTodoToShow = (string) => {
        this.setState({
            todoToShow: string
        })
    }

    handleDeleteTodo = (id) => {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        })
    }


    render(){
        let todos= [];
        if(this.state.todoToShow=== 'all'){
            todos=this.state.todos;
        }else if(this.state.todoToShow=== 'active'){
            todos=this.state.todos.filter(todo => !todo.complete);
        }else if(this.state.todoToShow=== 'complete'){
            todos=this.state.todos.filter(todo => todo.complete);
        }


        return (
            <div>
                <div className='container text-center mt-5 mb-5'>
                    <h1 className='pic'>todos</h1>
                </div>
                <ToDoForm onSubmit={this.addTodo} />
                {todos.map(todo => (
                    <ToDo key={todo.id} 
                        onDelete={()=> this.handleDeleteTodo(todo.id)}
                        toggleComplete={() => this.toggleComplete(todo.id)}  
                        todo={todo} />
                ))}
                <div className='container d-flex justify-content-between mt-5 ww bg-white pl-1 pr-0'>  
                    <div className=''>
                        {this.state.todos.filter(todo => !todo.complete).length} : left
                    </div>    
                    <div className=''>
                        <button onClick={()=> this.updateTodoToShow("all")}>all</button>
                        <button onClick={()=> this.updateTodoToShow("active")}>active</button>
                        <button onClick={()=> this.updateTodoToShow("complete")}>complete</button>
                    </div>
                    
                </div>
            </div>
        )
    }
    
}

export default ToDoList;
