import React, { Component } from "react";
import store from "../store";

class CommentsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: []
        };
    }

    componentDidMount() {
        store.subscribe(() => {
            console.log(store.getState());
            this.setState({
                comments: store.getState()
            });
        });
    }

    render() {
        console.log(`Comments state is: ${this.state.comments}`);
        return (
            <ul>
                {this.state.comments.map((comment, id) => {
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
