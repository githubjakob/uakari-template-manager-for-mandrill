import React from 'react'
import HttpClient from './httpClient'
import { Form, Text, TextArea, Radio, RadioGroup, Select, Checkbox } from 'react-form';

class Templates extends React.Component  {

    constructor(props) {
        super(props)
        this.state = {
            htmlTemplates: []
        }

    }

    componentDidMount() {
        this.getTemplates();
    }

    handleSubmit(formData) {
        HttpClient.createNewHtmlTemplate(this.props.mandrillApiKey, formData)
        this.setState(prevState => {htmlTemplates: [prevState, {name: formData.name, html: formData.html}]})
    }

    getTemplates() {
        var self = this;
        HttpClient.getHtmlTemplates(this.props.mandrillApiKey)
            .then(data => {
                self.setState({htmlTemplates: data})
            })
    }


    render() {

        var Templates = [];
        this.state.htmlTemplates.forEach(entry => {
            Templates.push(
                <tr>
                    <td>{entry.html} </td>
                </tr>
            )
        })

        return(<div>
            <table>
                <tbody>
                    {Templates}
                </tbody>
            </table>


            <h1>templates</h1>


            <Form onSubmit={submittedValues => this.handleSubmit(submittedValues)}>
                {formApi => (
                    <form onSubmit={formApi.submitForm} id="form2">
                        <label htmlFor="name">name</label>
                        <Text field="name" id="name" />
                        <label htmlFor="html">html</label>
                        <TextArea field="html" id="html" />
                        <button type="submit" className="mb-4 btn btn-primary">
                            Submit
                        </button>
                    </form>
                )}
            </Form>



        </div>)


    }
}

export default Templates