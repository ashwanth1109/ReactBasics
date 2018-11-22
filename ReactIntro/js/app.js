class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 100
        };
    }

    componentDidMount() {
        this.timerID = setInterval(() => {
            this.setState({
                count: this.state.count - 1
            });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(
            `The component has changed. Previous Count: ${prevState.count}`
        );
    }

    render() {
        return (
            <div>
                <h1>The value: {this.state.count}</h1>
            </div>
        );
    }
}

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counterExists: false
        };
    }
    toggleCounter = () => {
        this.setState({
            counterExists: !this.state.counterExists
        });
    };
    render() {
        return (
            <div>
                <button onClick={() => this.toggleCounter()}>
                    Toggle Counter
                </button>
                {this.state.counterExists ? <Counter /> : null}
            </div>
        );
    }
}

const app = (
    <div>
        <Container />
    </div>
);

ReactDOM.render(app, document.querySelector("main"));
