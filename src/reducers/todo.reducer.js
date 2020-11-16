import {TodoActions} from "../constants";

const initialState = [
    {
        id: 0,
        title: 'first todo',
        completed: true
    },
    {
        id: 1,
        title: 'second todo',
        completed: false
    }
];

let counter = initialState.length;

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case TodoActions.TODO_ADD:
            return [
                ...state,
                {
                    id: ++counter,
                    title: action.payload,
                    completed: false
                }
            ];
        // case TodoActions.TODO_UPDATE:
            // const indexTodo = state.findIndex(todos => {
            //     return todos.id === id
            // });
        case TodoActions.TODO_DELETE:
            // const indexTodo = state.findIndex((todo) => {
            //     return todo.id === action.payload
            // });
            //
            // return state.splice(indexTodo, 1);
            return state.filter(todo => todo.id !== action.payload);
        default:
            return state
    }
};

export default todoReducer
