import React, { Component } from 'react'
import PropTypes from 'prop-types' // npm下载prop-types

export class son extends Component {
    state = {
        name: "junior frontend",
        msg: 18
        // msg: "this is junior frontend"

    }
    // constructor(props){
    //     super()
    //     this.state={
    //         name:"junior frontend",
    //         msg:"this is junior frontend",
    //         parentMsg: props.msg
    //     }
    // }
    handleChange = (e) => {
        this.setState({parentMsg: e.target.value})
        this.props.parentChange(e.target.value)
    }
    render() {
        let { name, msg } = this.state
        let { name: pName, msg: pMsg } = this.props // 用别名直接从props里取值
        // 在这种父子组件种需要用到同样的属性名的时候, 我们会选择用定义别名进行区分
        // 如果不想用别名, 我们也可以直接用this.state.name,this.props.name
        return (
            <div>
                <h1>son page</h1>
                <p>name: {name}</p>
                <p>introduce: {msg}</p>

                <p>info from senior frontend: {pMsg}--{pName} </p>
                <input type='text' defaultValue={pMsg} onChange={this.handleChange} />
            </div>
        )
    }
}

// 使用props检验第二步
son.propTypes={
    name:PropTypes.string,
    msg: PropTypes.string
}
//  如果父组件里不写{...this.state} , 就会调用下面默认
son.defaultProps={
    name:"1",
    msg: "2"
}
export default son