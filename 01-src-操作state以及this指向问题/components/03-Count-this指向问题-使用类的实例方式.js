import React from 'react'
import './Count.css'


export default class Count extends React.Component{

    // constructor(){
    //     super()
    //     // 定义状态.添加到组件的实例上面
    //     //属性必须叫state. 值应该是对象
    //     this.state = {
    //         // 具体的数据
    //         count: 0,
    //         msg: '123'
    //     }

        
    // }
    state = {
        count: 0,
        msg: 123
    }

    // fn是添加到了原型上的方法
    // fn(){}
    // es7中类里面定义方法的新方式.  属性名=值
    // 这种新的写法,叫做类的实例方法
    // 因为这样定义函数,函数直接添加到了实例上面
    fn = () => {
        // console.log(this);
        // console.log(this.state);
        // 注意: 不要直接修改数据,如果直接修改数据,数据发生变化了,但是视图不会更新
        // this.state.count++ 
        // console.log(this.state);
        // setState的作用: 1. 修改数据  2. 更新视图
        this.setState({
          // 要修改哪个数据,就写哪个数据,其他的无需考虑
          // 因为这是状态的值,最好的写法是根据旧的值,得到一个新的值,然后赋值
          count: this.state.count + 1
        })
    }


    render(){
        console.log(this);
        // console.log('render执行了');
        // 注意: render函数中的this,一定指向当前组件的实例
    
        return <div>
            <h1>{this.state.count}</h1>
            <div>{this.state.msg}</div>
            {/* 这样写注册事件,底层真正的事件处理函数调用我们自定义的fn. 是普通函数调用,所以导致了fn函数中的this,指向undefined */}
            {/* 当使用了类的实例方法的方式,定义fn函数,底层触发事件,要调用fn的时候,必须是实例.fn() */}
            <button onClick={this.fn}>+</button>
        </div>
    }
}