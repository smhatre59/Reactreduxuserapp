import axios from "axios";

export function fetchUsers(){

  return function(dispatch){
    axios.get('http://reqres.in/api/users?page=1')
        .then((response) =>{
          dispatch({type:'FETCH_USERS_FULFILLED', payload:response.data.data});
        })
        .catch((err) => {
          dispatch({type:'FETCH_USERS_REJECTED',payload:err})
        })
  }
}
