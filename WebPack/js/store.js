import { createStore } from "redux";

const comments = function(state = [], action) {
    switch (action.type) {
        case "ADD":
            return [...state, action.comment];
        default:
            return state;
    }
};

const store = createStore(comments);

export default store;
