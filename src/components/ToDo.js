import React from 'react';


export default props => (
    <div className=' container ll d-flex flex-row'>
        <div onClick={props.toggleComplete} 
        style={{
            textDecoration: props.todo.complete ? "line-through"  : "",
            color: props.todo.complete ? "red" : ""
        }}
         className='container bzz pl-0'>
         {props.todo.text}
        </div>
         
        <div className=''>
            <button className='btn btn-outline-danger ' onClick={props.onDelete}>x</button>
        </div>   
    </div>
);