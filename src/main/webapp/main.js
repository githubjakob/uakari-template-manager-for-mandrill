import Connection from './connection'
import Templates from './templates'

class Main extends React.Component  {


    render() {

        if (this.props.screenIndex === 1) {
            return(<Connection
                eventEmitter={this.props.eventEmitter}
                mandrillApiKey={this.props.mandrillApiKey}/>)
        }

        if (this.props.screenIndex === 2) {
            return(<Templates
                mandrillApiKey={this.props.mandrillApiKey}/>)
        }

        if (this.props.screenIndex === 3) {
            return(<h1>not yet</h1>)
        }


    }
}

export default Main