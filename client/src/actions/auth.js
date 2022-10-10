import axios from 'axios';
import { SetAlert } from './alert';
import swal from 'sweetalert';
import {
  DELETE_USER,
  LIST_USERS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  CLEAR_PROFILE,
  LOGOUT,
  ADD_USER,
  ADD_USER_FAIL
} from './Types';
import setAuthToken from '../utils/setAuthToken';
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get('/api/auth');
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

export const register = ({
  firstname,
  lastname,
  Phone,
  email,
  password,
  password2,
  Address,
}) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({
    firstname,
    lastname,
    Phone,
    email,
    password,
    password2,
    Address,
  });

  try {
    const res = await axios.post('/api/users', body, config);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(SetAlert(error.msg, 'danger')));
    }

    dispatch({
      type: REGISTER_FAIL,
    });
  }
};
export const login = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post('/api/auth', body, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(SetAlert(error.msg, 'danger')));
    }

    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

// Logout / Clear Profile
export const logout = () => (dispatch) => {
  dispatch({ type: CLEAR_PROFILE });
  dispatch({ type: LOGOUT });
};



export const addUser = ({
  firstname,
  lastname,
  Phone,
  email,
  password,
  password2,
  Address,
  typeuser
}) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({
    firstname,
    lastname,
    Phone,
    email,
    password,
    password2,
    Address,
    typeuser
  });

  try {
  const res=  await axios.post('/api/users/add_user', body, config);

    dispatch({
      type: ADD_USER,
      payload: res.data,
    });
    dispatch(SetAlert('Fiche Added', 'danger'));
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(SetAlert(error.msg, 'danger')));
    }

    dispatch({
      type: ADD_USER_FAIL,
    });
  }
};


export const getUsers = () => async (dispatch) => {

  try {
    const res = await axios.get('/api/auth/all');
    dispatch({
      type: LIST_USERS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};





export const DeleteUsers = (id) => async (dispatch) => {

  try {
    const res = await axios.delete('/api/auth/'+id);
    dispatch({
      type: DELETE_USER,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};