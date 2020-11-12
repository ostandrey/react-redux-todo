import {FilterActions} from "../constants";

export const setFilter = (filter) => ({
    type: FilterActions.CHANGE,
    payload: filter
});
