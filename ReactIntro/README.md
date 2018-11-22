# REACT BASICS

## 1. Set up react functionality using scripts in HTML

1. react.js - contains the core react functionality
2. react-dom.js - allows react.js to work with browser's DOM
3. babel.js - babel transpiler that translates ES6 code into ES5 and handles turning JSX into regular JS

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/16.6.3/umd/react.production.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.6.3/umd/react-dom.production.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.26.0/babel.min.js"></script>
<script type="text/babel" src="js/app.js"></script>
```

## 2. ReactDOM.render() function

```javascript
ReactDOM.render(<h1>Hello React!</h1>, document.querySelector("main"));
```

To run index.html, install http-server using npm and run the following command in terminal

```
http-server -o index.html
```

## 3. Assign JSX into a variable

```javascript
const jsxVariable = <h1>Hello React!</h1>;

ReactDOM.render(jsxVariable, document.querySelector("main"));
```

## 4. Embed an expression into JSX

```javascript
const name = "Ashwanth";
const jsxVariable = <h1>Hello {name}!</h1>;
```

## 5. We can execute functions inside {}

```javascript
const getName = () => "Ashwanth";
const jsxVariable = <h1>Hello {getName()}!</h1>;
```

## 6. Multi Line JSX variables

```javascript
const jsxVariable = (
    <div>
        <h1>Hello React!</h1>
    </div>
);
```

## 7. Creating a component

```javascript
class Heading extends React.Component {
    render() {
        return <h1>Hello React!</h1>;
    }
}

ReactDOM.render(<Heading />, document.querySelector("main"));
```

## 8. Reusing components

```javascript
const jsx = (
    <div>
        <Heading />
        <Heading />
    </div>
);
```

## 9. Passing in props

```javascript
class Heading extends React.Component {
    render() {
        return <h1>Hello {this.props.name}!</h1>;
    }
}

const jsx = (
    <div>
        <Heading name="Ash" />
        <Heading name="Niko" />
    </div>
);
```

## 10. Handling events

```javascript
class Heading extends React.Component {
    alertName = () => {
        // arrow function handles binding for you
        // otherwise bind in constructor using following syntax:
        // this.alertName = this.alertName.bind(this)
        alert(this.props.name);
    };
    render() {
        return (
            <h1 onClick={() => this.alertName()}>Hello {this.props.name}!</h1>
        );
    }
}
```

## 11. Conditionally render HTML using if-else

```javascript
class Heading extends React.Component {
    render() {
        if (this.props.admin) {
            return <h1>Hello Admin!</h1>;
        } else {
            return <h1>Hello User!</h1>;
        }
    }
}

const app = (
    <div>
        <Heading admin />
        <Heading />
    </div>
);
```

## 12. Conditionally render HTML using ternary

```javascript
class Heading extends React.Component {
    render() {
        return <h1>Hello {this.props.admin ? "Admin" : "User"}!</h1>;
    }
}
```

## 13. Conditionally render JSX using ternary

```javascript
class Heading extends React.Component {
    render() {
        return (
            <h1>Hello {this.props.admin ? <em>Admin</em> : <em>User</em>}!</h1>
        );
    }
}
```

## 14. Create multiple elements from an array

```javascript
const nums = [1, 2, 3, 4];

class List extends React.Component {
    render() {
        return (
            <ul>
                {nums.map((num, index) => (
                    <li key={index}>{num}</li>
                ))}
            </ul>
        );
    }
}
```

## 15. Components inside Components

```javascript
class ListItem extends React.Component {
    render() {
        return <li>{this.props.num}</li>;
    }
}
class List extends React.Component {
    render() {
        return (
            <ul>
                {nums.map((num, id) => (
                    <ListItem key={id} num={num} />
                ))}
            </ul>
        );
    }
}
```

## 16. Accessing parent components tag content using children prop

```javascript
class Person extends React.Component {
    render() {
        return <div>Name of person: {this.props.children}</div>;
    }
}

const app = (
    <div>
        <Person>
            <em>Ash</em>
        </Person>
        <Person>
            <em>Niko</em>
        </Person>
    </div>
);
```

## 17. Component State

```javascript
class Auth extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null
        };
    }
    handleChangeName = e => {
        this.setState({
            username: e.target.value
        });
    };
    render() {
        return (
            <form>
                {this.state.username}
                <input
                    type="text"
                    placeholder="Enter your name"
                    onChange={e => this.handleChangeName(e)}
                />
                <input type="submit" value="Log In" />
            </form>
        );
    }
}
```

## 18. Create references to tags in a component

```javascript
class Auth extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null
        };
    }
    handleFormSubmit = e => {
        e.preventDefault();
        this.setState({
            username: this.refs.username.value
        });
    };
    render() {
        return (
            <form onSubmit={e => this.handleFormSubmit(e)}>
                {this.state.username}
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
```

## 19. Updating a child component with state values

```javascript
class Greeting extends React.Component {
    render() {
        return <h1>Welcome {this.props.name}</h1>;
    }
}

class Auth extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null
        };
    }
    handleFormSubmit = e => {
        e.preventDefault();
        this.setState({
            username: this.refs.username.value
        });
    };
    render() {
        return (
            <form onSubmit={e => this.handleFormSubmit(e)}>
                <Greeting name={this.state.username} />
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
```

## 20. Passing data to Parent Component for updating state

```javascript
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
```

## 21. Making AJAX requests within React

```javascript
const MovieInfo = props => {
    if (props.data) {
        const { Title, Director, Actors, Year, Rated } = props.data;
        return (
            <ul>
                <li>Title: {Title}</li>
                <li>Director: {Director}</li>
                <li>Actors: {Actors}</li>
                <li>Year: {Year}</li>
                <li>Rated: {Rated}</li>
            </ul>
        );
    } else {
        return null;
    }
};
class OMDBQueryForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            foundMovie: null
        };
    }
    queryOMDB = async e => {
        e.preventDefault();
        const response = await fetch(
            `http://www.omdbapi.com/?apikey=53aa2cd6&t=${this.refs.title.value}`
        );
        const data = await response.json();
        this.setState({
            foundMovie: data
        });
    };
    render() {
        return (
            <form onSubmit={e => this.queryOMDB(e)}>
                <input
                    ref="title"
                    type="text"
                    placeholder="Enter Movie Title"
                />
                <input type="submit" value="Find Movie Info" />
                <MovieInfo data={this.state.foundMovie} />
            </form>
        );
    }
}
```

## 22. Component Lifecycle Methods

```javascript
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
```

## 23. CSS Styling

```javascript
// CSS Styling in JS
const basicStyles = {
    background: "cyan",
    borderWidth: "2px",
    borderStyle: "solid",
    borderColor: "black",
    textAlign: "center"
};
// Extending styles using Object.assign() method
const extendedStyles = Object.assign({}, basicStyles, { padding: "10px" });

class Section1 extends React.Component {
    render() {
        return <div style={extendedStyles}>Styling in JS is fun</div>;
    }
}
```

## Composition to pass styles from parent component

```javascript
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
```
