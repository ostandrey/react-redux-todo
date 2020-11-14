import React from 'react'
import { useState } from 'react'
import {addTodo} from "../actions/todos.actions";
import { connect } from 'react-redux'

const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState('');

    return(
        <div>
            <input
                type="text"
                placeholder="Enter todo"
                value={value}
                onChange={event => setValue(event.target.value)}
            />
            <button onClick={() => { addTodo(value) }}>Add</button>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    addTodo: (title) => { dispatch(addTodo(title))}
});

export default connect(
    null,
    mapDispatchToProps
)(TodoForm)
