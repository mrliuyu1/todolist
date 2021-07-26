import React, { Component } from 'react'

export default class login extends Component {
    render() {

        const { handle,username} = this.props;
        
        return (
            <div>
                <input type="text" value = {username} onChange={handle('username')} />
            </div>
        )
    }
}
