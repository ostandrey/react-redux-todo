import {combineReducers} from "redux";
import filter from "./filter.reducer";
import todos from "./todo.reducer";

const rootReducer = combineReducers({
    filter,
    todos
});

export default rootReducer
