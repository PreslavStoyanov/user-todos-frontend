import { createStore } from 'redux';

const initialState = {
    selectedUserId: null,
    users: [],
    todos: []
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case 'SELECT_USER_ID':
            return {
                ...state,
                selectedUserId: action.payload,
            };
        case 'SET_USERS':
            return {
                ...state,
                users: action.payload,
            };
        case 'SET_TODOS':
            return {
                ...state,
                todos: action.payload,
            };
        default:
            return state;
    }
}

const store = createStore(rootReducer);

export default store;