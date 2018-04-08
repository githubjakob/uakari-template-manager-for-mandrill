import React from 'react'
import Connection from '../pages/connection'
import Templates from '../pages/templates'
import TextStrings from '../pages/textStrings'

class Main extends React.Component  {


    render() {

        if (this.props.screenIndex === 1) {
            return(<Connection
                eventEmitter={this.props.eventEmitter}
                mandrillApiKey={this.props.mandrillApiKey}/>)
        }

        if (this.props.screenIndex === 2) {
            return(<Templates
                userId={this.props.userId}/>)
        }

        if (this.props.screenIndex === 3) {
            return(<TextStrings/>)
        }


    }
}

export default Main