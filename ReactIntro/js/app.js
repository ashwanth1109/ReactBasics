class Heading extends React.Component {
    alertName = () => {
        // arrow function does binding properly here
        alert(this.props.name);
    };
    render() {
        return (
            <h1 onClick={() => this.alertName()}>Hello {this.props.name}!</h1>
        );
    }
}

const jsx = (
    <div>
        <Heading name="Ash" />
        <Heading name="Niko" />
    </div>
);

ReactDOM.render(jsx, document.querySelector("main"));
