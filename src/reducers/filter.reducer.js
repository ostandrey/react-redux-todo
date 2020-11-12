import {FilterActions, FilterTypes} from "../constants";

const filterReducer = (state = FilterTypes.SHOW_ALL, action) => {
    switch (action.type) {
        case FilterActions.CHANGE:
            return action.payload;
        default:
            return state
    }
};

export default filterReducer
