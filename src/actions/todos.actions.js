import { TodoActions } from "../constants";

export const addTodo = (title) => ({
    type: TodoActions.TODO_ADD,
    payload: title
});

export const updateTodo = (id) => ({
    type: TodoActions.TODO_UPDATE,
    payload: id
});

export const removeTodo = (id) => ({
    type: TodoActions.TODO_DELETE,
    payload: id
});
