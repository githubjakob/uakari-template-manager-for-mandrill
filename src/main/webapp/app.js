"use strict";
import Nav from './nav'
import Main from './main'
import { EventEmitter } from 'fbemitter'

class App extends React.Component {

    componentWillMount() {
        this.state = {
            screenIndex: 1,
            mandrillApiKey: 0}

        this.eventEmitter = new EventEmitter();

        this.eventEmitter.addListener("changeScreen", (newScreenIndex) => {
            this.setState({"screenIndex": newScreenIndex})
        })

        this.eventEmitter.addListener("apiKeyEntered", (apiKey) => {
            this.setState({"mandrillApiKey": apiKey})
        })
    }

    render() {

        return (<div>
            <Nav
                eventEmitter={this.eventEmitter}
                screenIndex={this.state.screenIndex}/>
            <Main
                eventEmitter={this.eventEmitter}
                screenIndex={this.state.screenIndex}
                mandrillApiKey={this.state.mandrillApiKey}/>
        </div>)
    }

}

let mainElement = document.querySelector("main");

ReactDOM.render(<App/>, mainElement);