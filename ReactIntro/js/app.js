class Heading extends React.Component {
    render() {
        return (
            <h1>Hello {this.props.admin ? <em>Admin</em> : <em>User</em>}!</h1>
        );
    }
}

const app = (
    <div>
        <Heading admin />
        <Heading />
    </div>
);

ReactDOM.render(app, document.querySelector("main"));
