import {FilterTypes} from "../constants";

const getTodos = (store) => store.todos;
const getFilter = (store) => store.filter;

export const getFilteredTodos = (store) => {
    const allTodos = getTodos(store);
    const filter = getFilter(store);
    switch (filter) {
        case FilterTypes.SHOW_ACTIVE:
            return allTodos.filter(todo => !todo.completed);
        case FilterTypes.SHOW_DONE:
            return allTodos.filter(todo => todo.completed);
        case FilterTypes.SHOW_ALL:
        default:
            return allTodos;
    }
};
