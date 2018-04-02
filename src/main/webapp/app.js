"use strict";
import Home from './home'
import Nav from './nav'
import { EventEmitter } from 'fbemitter'

class App extends React.Component {

    componentWillMount() {
        this.state = {
            screenIndex: 1
        }
        this.eventEmitter = new EventEmitter();

        this.eventEmitter.addListener("changeScreen", (newScreenIndex) => {
            this.setState({"screenIndex": newScreenIndex})
        })
    }

    render() {
        return (<div>
            <Nav
                eventEmitter={this.eventEmitter}
                screenIndex={this.state.screenIndex}/>
            <Home screenIndex= {this.state.screenIndex}/>
        </div>)
    }

}

let mainElement = document.querySelector("main");

ReactDOM.render(<App/>, mainElement);