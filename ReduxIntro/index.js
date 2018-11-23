// import the data store from custom reducer in store.js
import store from "./store";

// subscriber (e.g. a HTML list)
store.subscribe(function() {
    console.log(store.getState()); // for now just log what's in the store
});

// publisher (e.g. a user filling out a form and submitting it)
store.dispatch({
    type: "ADD",
    comment: {
        body: "comment 1",
        author: "John"
    }
});
store.dispatch({
    type: "ADD",
    comment: {
        body: "comment 2",
        author: "Jane"
    }
});
store.dispatch({
    type: "ADD",
    comment: {
        body: "comment 3",
        author: "Jenny"
    }
});
