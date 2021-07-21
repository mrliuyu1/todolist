// import React, { Component } from 'react'

// export default class Count extends Component {
//     render() {
//         console.log(this.props);
//         return (
//             <div>
//                 <h1>{this.props.count}</h1>
//             </div>
//         )
//     }
// }

import React from 'react'

export default function Count(props) {
    console.log(props);
    return (
        <div>
            <h1>{props.count}</h1>
        </div>
    )
}

