import React from 'react'
import HttpClient from '../httpClient'
import { Form, Text, TextArea, Radio, RadioGroup, Select, Checkbox } from 'react-form';
import TemplatesStore from '../stores/templatesStore'
import dispatcher from '../dispatcher/dispatcher'

class Templates extends React.Component  {

    constructor(props) {
        super(props)
        this.state = {
            htmlTemplates: TemplatesStore.getAllTemplates()
        }

    }

    componentDidMount() {
        // add Listener to Store
        TemplatesStore.addListener("newTemplate", () => {
            console.log("new template")
            this.setState({
                htmlTemplates: TemplatesStore.getAllTemplates()
            })
        })
    }


    submitNewHtmlTemplateForm(formData) {
        dispatcher.dispatch({
            type: "CREATE_NEW_TEMPLATE",
            formData
        })
    }

    render() {

        var Templates = [];
        this.state.htmlTemplates.forEach(entry => {
            var href = "http://localhost:8080/rest/htmlTemplate/" + entry.name + "?userId=" + this.props.userId
            Templates.push(
                <tr>
                    <td><a href={href} target="_blank">{entry.name}</a></td>
                </tr>
            )
        })

        return(<div>
            <h1>templates</h1>

            <h2>your templates</h2>

            <table>
                <tbody>
                    {Templates}
                </tbody>
            </table>


            <h2>add new template</h2>


            <Form onSubmit={submittedValues => this.submitNewHtmlTemplateForm(submittedValues)}>
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