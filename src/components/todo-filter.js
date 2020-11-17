import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { setFilter } from '../actions'
import {FilterNames, FilterTypes} from "../constants";
import TodoFilterButton from "./todo-filter-button";

const TodoFilter = ({ filter, setFilter }) => (
    <div className={'filter-container'}>
        <div className={'btn-group'}>
            {
                Object.keys(FilterTypes).map(filterType =>

                    <TodoFilterButton
                        name={FilterNames[filterType]}
                        setFilter={() => { setFilter(FilterTypes[filterType]) }}
                        active={filter === FilterTypes[filterType]}
                    />

                )
            }
        </div>
    </div>
);

const mapStateToProps = state => ({
    filter: state.filter
});

const mapDispatchToProps = dispatch => ({
    setFilter: (filterType) => { dispatch(setFilter(filterType)) }
});

TodoFilter.propTypes = {
    filter: PropTypes.string.isRequired,
    setFilter: PropTypes.func.isRequired
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoFilter)
