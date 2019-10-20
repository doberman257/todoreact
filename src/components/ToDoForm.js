import React from 'react'
import shortid from 'shortid';


export default class ToDoForm extends React.Component {
   
    state = {
        text: ''
    }


    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if(this.state.text.length < 10){
            prompt('muss laenger als 10 Zeichen');
        }else {
            this.props.onSubmit({
                id: shortid.generate(),
                text: this.state.text,
                complete: false
            });
        
            this.setState({
                text: ''
            });
            localStorage.setItem('todo', JSON.stringify(this.state.text));
        }    
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit} className="form-inline container d-flex justify-content-center">
                <div className="form-group  mb-2">
                    <input 
                        name='text'
                        value={this.state.text} 
                        onChange={this.handleChange}
                        type="text" className="form-control" 
                        placeholder="What needs to be done?"
                    />
                </div>
                <button onClick={this.handleSubmit} type="submit" className="btn btn-primary mb-2">Add</button>
            </form>
        )
    } 
}


