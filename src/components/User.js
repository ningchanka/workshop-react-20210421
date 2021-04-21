// function User(){
//     return <li>nnn</li>
// }

const { Component } = require("react");

// export default User;

class User extends Component{
    render(){
        return <li>{this.props.info}</li>;
    }
}
export default User;