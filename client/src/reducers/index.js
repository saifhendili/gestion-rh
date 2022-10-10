import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth.js';
import fiche from './fiche';
import compare from './compare';

export default combineReducers({

  auth,
  alert,
  fiche,
  compare
});