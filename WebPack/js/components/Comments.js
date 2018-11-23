import React, { Component } from "react";
import CommentsList from "./CommentsList";
import CommentsForm from "./CommentsForm";

class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: [
                {
                    body: "awesome comment",
                    author: "john"
                },
                {
                    body: "awesome comment 2",
                    author: "jane"
                },
                {
                    body: "awesome comment 3",
                    author: "jenny"
                }
            ]
        };
    }

    addComment(comment) {
        this.state.comments.push(comment);
        this.setState({
            comments: this.state.comments
        });
    }
    render() {
        return (
            <div>
                <CommentsList comments={this.state.comments} />
                <CommentsForm
                    createComment={comment => this.addComment(comment)}
                />
            </div>
        );
    }
}

export default Comments;
