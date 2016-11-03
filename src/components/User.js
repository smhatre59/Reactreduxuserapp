import React from "react";
import ReactDOM from "react-dom"

export default class User extends React.Component{
  render(){
    console.log("userprops",this.props);
    return (
      <div>

        <img src={this.props.avatar} className="avatar"/>
        <div className="username">
          {this.props.firstname} {this.props.lastname}
        </div>
      </div>
    )
  }
}
