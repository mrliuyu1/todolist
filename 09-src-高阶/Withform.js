import React ,{ Component} from 'react';

export default function Withform(Withcompoent){
 return   class extends Component {
     
        state = {

            username : ''
            
        };    
        handle = (name) => (e)=> {
            this.setState({
                [name] : e.target.value
            })
        }
        render() {
            return <Withcompoent {...this.state} handle={this.handle}></Withcompoent>
        }
    }
} 