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
        default:
            return state
    }
};

export default todoReducer
