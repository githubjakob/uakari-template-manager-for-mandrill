import React from 'react'

class Nav extends React.Component {


    constructor(props) {
        super(props)

    }

    updateScreen(newScreenIndex) {
        this.setState({"screenIndex": newScreenIndex})
        this.props.eventEmitter.emit("changeScreen", newScreenIndex)
    }

    render() {
        return (
            <div className="nav-wrapper">
                <ul>
                    <li
                        className={this.props.screenIndex === 1 ? "navElementActive" : ""}
                        onClick={() => this.updateScreen(1)}><p>Home</p></li>
                    <li className={this.props.screenIndex === 2 ? "navElementActive" : ""}
                        onClick={() => this.updateScreen(2)}><p>Templates</p></li>
                    <li className={this.props.screenIndex === 3 ? "navElementActive" : ""}
                        onClick={() => this.updateScreen(3)}><p>Translations</p></li>
                </ul>
            </div>
        )
    }
}

export default Nav