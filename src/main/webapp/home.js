import HttpClient from './httpClient'

class Home extends React.Component {


    render() {
        return <div>
            <h1>{this.props.screenIndex}</h1>

            <button onClick={() => HttpClient.addNewMandrillApiKey()}> asdfafsd </button>

            </div>
    }
}

export default Home