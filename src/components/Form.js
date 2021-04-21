const { Component } = require("react");

class Form extends Component{
    constructor() {
        super();
        this.state = {
            data: ""
        }
        this.doKey = this.doKey.bind(this)
    }

    doKey(event) {
        this.setState({
            data: event.target.value
        })
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
    <p>Hello : {this.state.data}</p>
    </div>;
    }

}
export default Form;