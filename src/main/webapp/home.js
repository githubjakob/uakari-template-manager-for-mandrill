import HttpClient from './httpClient'

class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            "value": ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        console.log("state" + this.state.value)
        HttpClient.addNewMandrillApiKey(this.state.value)
        event.preventDefault()
    }

    render() {
        return <div>
            <h1>{this.props.screenIndex}</h1>

                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>

            </div>
    }
}

export default Home