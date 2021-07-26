import React, { Component } from 'react'

export default class Position extends Component {
    state = {

        username : '1'
    }
    handle = (name) => (e) => {
            this.setState({ 
                [name] : e.target.value,
            })
    }
    render() {
        return this.props.render(this.state,this.handle)
    }
}
