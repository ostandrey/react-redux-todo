import React from 'react'
import PropTypes from 'prop-types'

const TodoListItem = ({todo, removeTodo, updateTodo}) => {

    return(
        <li>
            <span>
                {todo.title}
            </span>
            <div className={'btn-item-container'}>
                <button
                    className={'btn btn-outline-success btn-item'}
                    id={'btn-edit'}
                    onClick={() => updateTodo()}
                >
                    <span className="material-icons">
                        done
                    </span>
                </button>
                <button
                    className={'btn btn-outline-danger btn-item'}
                    id={'btn-delete'}
                    onClick={() => removeTodo()}
                >
                    <span className="material-icons">
                        delete_forever
                    </span>
                </button>
            </div>
        </li>
    )
};

TodoListItem.propTypes = {
    title: PropTypes.string.isRequired
};

export default TodoListItem

