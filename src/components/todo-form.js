import React from 'react'
import { useState } from 'react'
import {addTodo} from "../actions/todos.actions";
import { connect } from 'react-redux'

const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState('');

    return(
        <div className="input-container">
            <div className={'form-group'}>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter todo"
                    value={value}
                    onChange={event => setValue(event.target.value)}
                />
            </div>
            <div>
                <button onClick={() => { addTodo(value) }}
                        className="btn btn-primary">
                    Add
                </button>
            </div>
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
