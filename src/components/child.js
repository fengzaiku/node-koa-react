import React,{Component} from "react"
import ChildSty from "../statics/stylesheet/childStyle.less"

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
                <h1 className = {ChildSty.title}>我是详情！</h1>
                <img src={require("../statics/images/test.jpg")}/>
                <button onClick = {this.handleClick} className = {ChildSty.returnBut}>点击返回</button>
                <div className = {ChildSty.bgImage}></div>
            </div>
        )
    }
}

export default Child

