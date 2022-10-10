import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    ADD_USER,LIST_USERS,DELETE_USER
  } from '../actions/Types';
  
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null,
    newuser:null,
    users:[]
  };
  export default function (state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case REGISTER_SUCCESS:
      case LOGIN_SUCCESS:
        localStorage.setItem('token', payload.token);
        return {
          ...state,
          ...payload,
          isAuthenticated: true,
          loading: false,
        };
      case USER_LOADED:
        // localStorage.setItem('token', payload.token);
        return {
          ...state,
          // ...payload,
          isAuthenticated: true,
      
          user: payload,
          loading: false,
        };
case DELETE_USER : return{
  ...state,
  users: payload,
  loading: false,
}

      case  LIST_USERS:
        return {
          ...state,
          users: payload,
          loading: false,
        };
  case ADD_USER:
      return {
          ...state,
          newuser: payload,
          loading: false,
        };
      case REGISTER_FAIL:
      case AUTH_ERROR:
      case LOGIN_FAIL:
      case LOGOUT:
        localStorage.removeItem('token');
        return {
          ...state,
          token: null,
          isAuthenticated: false,
          loading: false,
        };
  
      default:
        return state;
    }
  }