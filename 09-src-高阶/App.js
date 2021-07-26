import React, { Component } from 'react'
import Withform from './Withform'
import Login from './Login'
import Register from './Register'


const WithLogin = Withform(Login)
const WithRegister = Withform(Register)
export default class App extends Component {
    render() {
       
       
        return (
            <div>
               <WithLogin></WithLogin>
               <WithRegister></WithRegister>
            </div>
        )
    }
}
