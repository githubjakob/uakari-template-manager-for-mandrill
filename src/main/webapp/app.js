"use strict";
import Home from './home'

class Nav extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            screenIndex: 1
        }
    }

    updateNav(newScreenIndex) {
        console.log(newScreenIndex)
        this.setState({screenIndex: newScreenIndex})
    }

    render() {
        return (
        <div className="nav-wrapper">
            <ul>
                <li
                    className={this.state.screenIndex === 1 ? "navElementActive" : ""}
                    onClick={() => this.updateNav(1)}><p>Home</p></li>
                <li className={this.state.screenIndex === 2 ? "navElementActive" : ""}
                    onClick={() => this.updateNav(2)}><p>Templates</p></li>
                <li className={this.state.screenIndex === 3 ? "navElementActive" : ""}
                    onClick={() => this.updateNav(3)}><p>Translations</p></li>
            </ul>
        </div>
    )
    }
}

class App extends React.Component {

    render() {
        return (<div>
            <Nav/>
            <Home/>
        </div>)
    }

}

let mainElement = document.querySelector("main");

ReactDOM.render(<App/>, mainElement);