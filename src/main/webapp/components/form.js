import React from 'react'

class Form extends React.Component {

    constructor(props) {
     super(props);
     this.state = {
         value: ""
     }

     this.handleChange = this.handleChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
     }

     handleChange(event) {
        this.setState({value: event.target.value});
     }

     handleSubmit(event) {
         event.preventDefault()
         this.props.submitFunction(this.state.value)
     }

    render() {

        if (this.props.type === "multiline") {
            return(
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <textarea type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Enter" />
                </form>
            )
        } else {
            return(
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Enter" />
                </form>
            )
        }

    }

}

export default Form