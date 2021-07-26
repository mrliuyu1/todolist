import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        const { username ,handle } = this.props
       
        return (
            <div>
                <input type="text" value  = { username} onChange = { handle('username')} />
            </div>
        )
    }
}
