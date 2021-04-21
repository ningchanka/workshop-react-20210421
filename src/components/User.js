// function User(){
//     return <li>nnn</li>
// }

const { Component } = require("react");

// export default User;

class User extends Component{
    
    render(){
        const data = this.props.users.map((user)=>(
            <li key={user.id}>{user.name} - {user.age}</li>
          ));
        return <ul>{data}</ul>;
    }
}
export default User;