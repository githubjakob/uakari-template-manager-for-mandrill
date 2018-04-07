import React from 'react'
import HttpClient from './httpClient'
import { Form, Text, TextArea, Radio, RadioGroup, Select, Checkbox } from 'react-form'

class Connection extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            value: "connection",
            pingOk: "pinging mandrill api..."
        }
    }

    handleSubmit(apiKey) {
        this.props.eventEmitter.emit("apiKeyEntered", apiKey)

        HttpClient.pingMandrill(apiKey)
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

            <Form onSubmit={submittedValues => this.handleSubmit(submittedValues.mandrillApiKey)}>
                {formApi => (
                    <form onSubmit={formApi.submitForm} id="form2">
                        <label htmlFor="mandrillApiKey">mandrillApiKey</label>
                        <Text field="mandrillApiKey" id="mandrillApiKey" />
                        <button type="submit" className="mb-4 btn btn-primary">
                            Submit
                        </button>
                    </form>
                )}
            </Form>


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