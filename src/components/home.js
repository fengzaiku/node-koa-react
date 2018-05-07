import React,{Component} from "react"

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
        return(
            <div>
                <h1>世界你好！</h1>
                <button onClick = {this.handleClick}>进入详情</button>
            </div>
        )
    }
}

export default Home

