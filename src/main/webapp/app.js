import React from 'react'
import ReactDOM from 'react-dom'
import Nav from './nav'
import Main from './main'
import md5 from 'md5'
import { EventEmitter } from 'fbemitter'

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            screenIndex: 1,
            mandrillApiKey: 0,
            userId: ""}

        this.eventEmitter = new EventEmitter();
    }

    componentDidMount() {


        this.eventEmitter.addListener("changeScreen", (newScreenIndex) => {
            this.setState({"screenIndex": newScreenIndex})
        })

        this.eventEmitter.addListener("apiKeyEntered", (apiKey) => {
            this.setState({"mandrillApiKey": apiKey})
            this.setState({userId: md5(apiKey)})
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
                mandrillApiKey={this.state.mandrillApiKey}
                userId={this.state.userId}/>
        </div>)
    }

}

let mainElement = document.querySelector("main");

ReactDOM.render(<App/>, mainElement);