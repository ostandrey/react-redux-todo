import React from 'react'
import { connect } from 'react-redux'
import TodoListItem from "./todo-item";
import PropTypes from "prop-types";
import {removeTodo, updateTodo} from "../actions/todos.actions";

const TodoList = ({ todos, removeTodo, updateTodo }) => {
    return (
        <div className={'todo-list'}>
            <ul>
                {
                    todos.map( todo =>
                        <TodoListItem
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
    todos: state.todos
});

TodoListItem.propTypes = {
    title: PropTypes.string.isRequired
};

const mapDispatchToProps = dispatch => ({
    removeTodo: (id) => { dispatch(removeTodo(id)) },
    updateTodo: (id) => { dispatch(updateTodo(id)) }
});


export default connect(
    mapStateToProps, mapDispatchToProps
)(TodoList)
