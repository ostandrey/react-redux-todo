import React from 'react'
import PropTypes from 'prop-types'

const TodoListItem = ({title, removeTodo}) => {

    return(
        <li>
            <span>
                <input
                    className="check-input"
                    type="checkbox"
                    />
                {title}
            </span>
            <div className={'btn-item-container'}>
                <button
                    className={'btn btn-outline-success btn-item'}
                    id={'btn-edit'}

                >
                <span className="material-icons">
                    create
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

