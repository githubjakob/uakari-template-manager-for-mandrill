"use strict";

class HelloWorld extends React.Component {

    render() {
        return React.createElement("h1", null, "Hello World!");
    }

}

let mainElement = document.querySelector("main");

ReactDOM.render(React.createElement(HelloWorld), mainElement);