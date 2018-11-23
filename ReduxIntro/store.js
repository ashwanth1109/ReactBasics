import { createStore } from "redux";

const comments = function(state = [], action) {
    // this function has take these params
    switch (
        action.type // action must be an object that has a type property
    ) {
        case "ADD": // if type of action is 'ADD'
            return [...state, action.comment]; // returns a copy of redux's current state with the added comment
        default:
            // always have a default that returns the current state
            return state;
    }
};

// now export the data store based on the custom reducer
export default createStore(comments);
