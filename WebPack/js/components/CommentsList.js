import React, { Component } from "react";

class CommentsList extends Component {
    render() {
        return (
            <ul>
                {this.props.comments.map((comment, id) => {
                    return (
                        <li key={id}>
                            {comment.author} says: "{comment.body}"
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default CommentsList;
