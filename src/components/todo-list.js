import React from 'react'
import { connect } from 'react-redux'
import TodoListItem from "./todo-item";
import PropTypes from "prop-types";
import {removeTodo, updateTodo} from "../actions/todos.actions";
import {getFilteredTodos} from "../selectors";

const TodoList = ({ todos, removeTodo, updateTodo }) => {
    return (
        <div className={'todo-list'}>
            <ul>
                {
                    todos.map( todo =>
                        <TodoListItem
                            key={todo.id}
                            todo = {todo}
                            removeTodo = {() => { removeTodo(todo.id) }}
                            updateTodo = {() => { updateTodo(todo.id) }}
                        />)
                }
            </ul>
        </div>
    )
};

const mapStateToProps = state => ({
    todos: getFilteredTodos(state)
});

TodoListItem.propTypes = {
    todo: PropTypes.object.isRequired
};

const mapDispatchToProps = dispatch => ({
    removeTodo: (id) => { dispatch(removeTodo(id)) },
    updateTodo: (id) => { dispatch(updateTodo(id)) }
});


export default connect(
    mapStateToProps, mapDispatchToProps
)(TodoList)
