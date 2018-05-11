import React,{Component} from "react"
import ChildSty from "../statics/stylesheet/childStyle.less"
// import ChildSty from "../statics/stylesheet/childStyle.css"
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
                <img src="../statics/images/test.jpg"/>
                <button onClick = {this.handleClick} className = {ChildSty.returnBut}>点击返回</button>
            </div>
        )
    }
}

export default Child

