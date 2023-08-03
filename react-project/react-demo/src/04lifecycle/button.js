import React, { Component } from 'react'

export class button extends Component {
    constructor(props) {
        // initial stage
        super(props)
        this.state = { liked: false }
        console.group('%c 1-initial stage', "color: red", props, this.state);
    }
    handleClick = () => {
        this.setState({ liked: !this.state.liked })
    }

    UNSAFE_componentWillMount() {
        // 将重新命名在react18, 需要用UNSAFE_前缀
        // 只会在组件加载前调用一次, 在render之前调用
        // 我们可以在这个方法里面调用setState改变状态,并且不会导致额外调用一次render
        console.group('%c 2-component before loading', "color: green");
    }

    componentDidMount() {
        // 只会在加载之后调用一次, 在render之后调用,
        // 从这里开始可以通过ReactDOM.findDOMNode(this)获取到组件中的dom节点
        console.group('%c 4-component after loading', "color: orange");
    }

    shouldComponentUpdate() {
        console.group('%c 5-数据是否更新', "color: #00ae9d");
        return true // false组件不会更新, true代表组件更新
    }
    UNSAFE_componentWillUpdate(nextProps, nextState) {
        console.group('%c 6-数据将要更新', "color: #00aeff");
    }

    render() {
        console.group('%c 3-loading component or updating data', "color: blue")
        const text = this.state.liked ? "liked" : "unliked"
        return (
            <div>
                <p onClick={this.handleClick.bind(this)}>
                    你{text}学习React
                </p>
            </div>
        )
    }
    componentDidUpdate(nextProps, nextState) {
        console.group('%c 8-数据已经更新', "color: #00ae00");
    }
    componentWillUnmount(){
        //完成组件卸载和数据销毁,清除组件所有setInterval, setTimeout and so on.
        console.group('%c 9-组件销毁');
    }
}

export default button