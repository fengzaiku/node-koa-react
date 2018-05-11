import React,{Component} from "react"
import HomeSty from "../statics/stylesheet/homeStyle.less"
// import HomeSty from "../statics/stylesheet/homeStyle.css"
class Home extends Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(){
        console.log(this.props)
        this.props.history.push('/child')
    }
    render(){
        console.log(HomeSty)
        return(
            <div className = {HomeSty.box}>
                <h1 className = {HomeSty.title}>世界你好！</h1>
                <input type="text" placeholder = "请输入内容" value = "" className = {HomeSty.input}/>
                <button onClick = {this.handleClick}>进入详情</button>
            </div>
        )
    }
}

export default Home

