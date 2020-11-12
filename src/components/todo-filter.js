import React from 'react'
import { connect } from 'react-redux'
import { setFilter } from '../actions'
import {FilterTypes} from "../constants";

const TodoFilter = ({ filter, setFilter }) => (
    <div>
        <span>{filter}</span>
        <button onClick={() => { setFilter(FilterTypes.SHOW_ALL) }}>All</button>
        <button onClick={() => { setFilter(FilterTypes.SHOW_ACTIVE) }}>Active</button>
        <button onClick={() => { setFilter(FilterTypes.SHOW_DONE) }}>Done</button>
    </div>
);

const mapStateToProps = state => ({
    filter: state.filter
});

const mapDispatchToProps = dispatch => ({
    setFilter: (filterType) => { dispatch(setFilter(filterType)) }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoFilter)
