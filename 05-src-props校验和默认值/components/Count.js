import React, { Component } from 'react'
import PropTypes from 'prop-types'
 class Count extends Component {
     // props校验. 提示更新清晰的错误
    static propTypes = {
        list: PropTypes.array.isRequired
    }
    // props默认值,不传某个属性的时候,默认值生效
    static defaultProps = {
        list: ['test','test','test']
    }
    render() {
        return (
            <div>
               {this.props.list.map((item, index)=><div key={index}>{item}</div>)} 
            </div>
        )
    }
}

// 给类组件添加静态属性,进行props校验
// Count.propTypes = {

// }

export default Count
