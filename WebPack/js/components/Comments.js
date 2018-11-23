import React, { Component } from "react";
import CommentsList from "./CommentsList";
import CommentsForm from "./CommentsForm";

class Comments extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <CommentsList />
                <CommentsForm />
            </div>
        );
    }
}

export default Comments;
