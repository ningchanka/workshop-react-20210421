const { Component } = require("react");

class Clock extends Component{
    constructor() {
        super();
        this.state = {
            date: new Date()
        }
    }

    componentDidMount() {
        this.xx = setInterval( () => { 
            this.setState( { date: new Date() })
        } , 500);
    } //หลังจากที่ถูกใช้งาน

    componentWillUnmount() {
        clearInterval(this.xx);
    } //ถ้าเลิกใช้แล้ว

    render(){
    return <div>Current date={this.state.date.toLocaleTimeString()}</div>;
    }

}
export default Clock;