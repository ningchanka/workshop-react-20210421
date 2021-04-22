const { Component } = require("react");

class Form extends Component{
    constructor() {
        super();
        this.state = {
            data: "",
            message: ""
        }
        this.doKey = this.doKey.bind(this)
    }

    doKey(event) {
        this.setState({
            data: event.target.value
        })
    }

    sayHi() {
        console.log("clicek say hi")
        this.setState({
            message: "Hello " + this.state.data
        })
        this.props.onSayhi(this.state.data)
    }
    // componentDidMount() {
    //     this.xx = setInterval( () => { 
    //         this.setState( { date: new Date() })
    //     } , 500);
    // } //หลังจากที่ถูกใช้งาน

    // componentWillUnmount() {
    //     clearInterval(this.xx);
    // } //ถ้าเลิกใช้แล้ว

    render(){
    return <div>
        <input type="text" onKeyUp={this.doKey} />
        <button onClick={() => this.sayHi()} >Say hi</button>
        <p>Data: {this.state.data}</p>
        <p>Message : {this.state.message}</p>
    </div>;
    }

}
export default Form;