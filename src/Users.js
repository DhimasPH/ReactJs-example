import React , {Component} from 'react';
import {Link} from 'react-router-dom';

class Users extends Component{

  constructor(props){
    super(props)
    this.state = {
      items : [],
      isLoading : true
    }
  }

  // get data from api
  componentDidMount(){
    fetch("http://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => this.setState({ items:data, isLoading : false }) )
  }


  render(){

    const { items,isLoading } = this.state

    return (
        <div>
          <h2 style={{'text-align':'center'}}>Halaman List Users</h2>
          <center>{isLoading ? <h5>Loading data ...</h5> : <ul>{items.map((items,index) => <Link to={{pathname: `user/${items.name.replace(' ','-')}`}}><li key={index}>{items.name} </li> </Link> )}</ul> }</center>
        </div>
    )

  }
}

export default Users;