import React from 'react'
import { connect } from 'react-redux'
import TodoListItem from "./todo-item";
import PropTypes from "prop-types";
import {removeTodo} from "../actions/todos.actions";

const TodoList = ({ todos, removeTodo }) => {
    return (
        <div className={'todo-list'}>
            <ul>
                {
                    todos.map( todo =>
                        <TodoListItem
                            title={todo.title}
                            removeTodo = {() => { removeTodo(todo.id) }}
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
    removeTodo: (id) => { dispatch(removeTodo(id)) }
});


export default connect(
    mapStateToProps, mapDispatchToProps
)(TodoList)
