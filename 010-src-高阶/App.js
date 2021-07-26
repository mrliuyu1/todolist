import React, { Component } from 'react'
import Position from './Position'
import Login from './Login'
export default class App extends Component {
    render() {
        return (
            <div>
                <Position render = { (data,handle) => { return <Login {...data} handle = {handle}></Login> }  } ></Position>
            </div>
        )
    }
}
