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
