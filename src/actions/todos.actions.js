import { TodoActions } from "../constants";

export const addTodo = (title) => ({
    type: TodoActions.TODO_ADD,
    payload: title
});
