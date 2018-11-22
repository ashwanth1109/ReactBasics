class Heading extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null
        };
    }
    handleFormSubmit = (e, name) => {
        e.preventDefault();
        this.setState({
            username: name
        });
    };
    render() {
        return (
            <div>
                <h1>Welcome {this.state.username}!</h1>
                <Auth onLogin={(e, name) => this.handleFormSubmit(e, name)} />
            </div>
        );
    }
}

class Auth extends React.Component {
    render() {
        return (
            <form
                onSubmit={e => this.props.onLogin(e, this.refs.username.value)}
            >
                <input
                    type="text"
                    placeholder="Enter your name"
                    ref="username"
                />
                <input type="submit" value="Log In" />
            </form>
        );
    }
}
const app = (
    <div>
        <Heading />
    </div>
);

ReactDOM.render(app, document.querySelector("main"));
