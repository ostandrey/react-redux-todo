import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const TodoFilterButton = ({ name, setFilter, active = false }) => (
    <button
        className={classnames('btn-filter', {'btn-filter-selected': active})}
        onClick={() => setFilter()}
    >
        {name}
    </button>
);

TodoFilterButton.propTypes = {
    name: PropTypes.string.isRequired,
    setFilter: PropTypes.func.isRequired,
    active: PropTypes.bool
};

export default TodoFilterButton