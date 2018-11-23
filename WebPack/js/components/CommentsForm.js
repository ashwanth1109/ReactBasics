import React, { Component } from "react";
import store from "../store";

class CommentsForm extends Component {
    handleSubmit(e) {
        e.preventDefault();
        store.dispatch({
            type: "ADD",
            comment: {
                body: this.refs.body.value,
                author: this.refs.author.value
            }
        });
        this.refs.body.value = "";
        this.refs.author.value = "";
    }
    render() {
        return (
            <form onSubmit={e => this.handleSubmit(e)}>
                <input type="text" placeholder="author" ref="author" />
                <br />
                <textarea placeholder="comment" ref="body" />
                <br />
                <input type="submit" value="Post Comment" />
            </form>
        );
    }
}

export default CommentsForm;
