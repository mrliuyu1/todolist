import React, { Component } from 'react'
import Son from './Son'
export default class App extends Component {
        constructor(){
            super()
            this.state = {
                count : 1
            }
        }

    render() {
       
        
        return (
            <div>
               <button onClick={() => {
                   
                   this.setState({count:0})
               }}> 卸载</button>
               {this.state.count &&<Son></Son>  }
            </div>
        )
    }

    componentDidUpdate(){
        console.log('update');
    }
    componentWillUnmount(){
        console.log('un');
    }
    componentDidMount(){
        console.log('mount');
    }
    
}
