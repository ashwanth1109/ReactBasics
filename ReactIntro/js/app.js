const basicStyles = {
    background: "cyan",
    borderWidth: "2px",
    borderStyle: "solid",
    borderColor: "black",
    textAlign: "center"
};

class Section1 extends React.Component {
    render() {
        return (
            <div style={Object.assign({}, basicStyles, this.props.style)}>
                {this.props.children}
            </div>
        );
    }
}

const parentStyle = { padding: "10px" };

class Section2 extends React.Component {
    render() {
        return (
            <div>
                <Section1 style={parentStyle}>Styling in JS is fun</Section1>
            </div>
        );
    }
}

const app = (
    <div>
        <Section2 />
    </div>
);

ReactDOM.render(app, document.querySelector("main"));
