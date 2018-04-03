import Form from './components/form'
import HttpClient from './httpClient'
import md5 from 'md5'

class Templates extends React.Component  {

    handleSubmit(html) {
        var userId = md5(this.props.mandrillApiKey)
        HttpClient.createNewHtmlTemplate(userId, html)
    }


    render() {

        return(<div>
            <h1>templates</h1>

            <Form
                submitFunction={this.handleSubmit.bind(this)}
                type="multiline"/>

        </div>)


    }
}

export default Templates