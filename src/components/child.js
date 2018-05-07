import React,{Component} from "react"

class Child extends Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        console.log(this.props)
        this.props.history.goBack();
    }
    render(){
        return(
            <div>
                <h1>我是详情！</h1>
                <button onClick = {this.handleClick}>点击返回</button>
            </div>
        )
    }
}

export default Child

