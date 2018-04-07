import React from 'react'
import HttpClient from './httpClient'
import Form from './components/form'

class Connection extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            value: "connection",
            pingOk: "pinging mandrill api..."
        }
    }

    handleSubmit(value) {
        this.props.eventEmitter.emit("apiKeyEntered", value)

        HttpClient.pingMandrill(value)
            .then((data) => {
                if (data.ok) {
                    this.setState({pingOk: "ping to mandrill api is ok"})
                } else {
                    this.setState({pingOk: "could not reach mandrill api with this key"})
                }
        })
    }

    render() {

        var enterKey = <div>
            <h1>Setup Mandrill Api Key</h1>

            <Form
                submitFunction={this.handleSubmit.bind(this)}/>

        </div>

        var keyEntered = <div>
            <h1>Setup Mandrill Api Key</h1>

            <h2>Mandrill Api Key: {this.props.mandrillApiKey}</h2>
            <p>{this.state.pingOk}</p>
        </div>

        if (this.props.mandrillApiKey === 0) {
            return (enterKey)
        } else {
            return (keyEntered)
        }

    }
}

export default Connection