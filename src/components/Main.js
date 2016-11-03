import React from "react";
import ReactDOM from "react-dom";

import {connect} from "react-redux";
import UserList from './UserList.js'

import {fetchUsers} from "../actions/userActions.js"
@connect((store) => {
  // console.log("ins store",store.userReducer.users);
  return {
    users: store.userReducer.users
  }
})


export default class Main extends React.Component{
  componentWillMount(){
      this.props.dispatch(fetchUsers());
  }

  render(){
    console.log(this.props.users);
    return (
      <div>
      <UserList users ={this.props.users}/>
      </div>
    )
  }
}
