import axios from 'axios';
import {GET_SOUSCATEGORIEFICHE2,GET_SOUSCATEGORIEFICHE,GET_MATRICE,ADD_FICHE_COMPARE,ADD_FICHE_COMPARETWO,GET_CATEGORIEFICHE,FICHE_ERROR
} from './Types'

export const addFicheCompare = (payload) => async (dispatch) => {
    dispatch({
        type: ADD_FICHE_COMPARE,
        payload
      });
    }
    
export const addFicheCompareTwo = (payload) => async (dispatch) => {
    dispatch({
        type: ADD_FICHE_COMPARETWO,
        payload
      });
    }

    
  export const getCategorieFiche = () => async (dispatch) => {
    try {
      const res = await axios.get(
        `/api/fichev/fichecategorie/`
      );
  
      dispatch({
        type: GET_CATEGORIEFICHE,
        payload: res.data,
      });
  
    } catch (err) {
      dispatch({
        type: FICHE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };

  
  export const getSousCategorieFiche = (categorie) => async (dispatch) => {
    try {
      const res = await axios.get(
        `/api/fichev/souscategorieFiche/${categorie}`
      );
  
      dispatch({
        type: GET_SOUSCATEGORIEFICHE,
        payload: res.data,
      });
  
    } catch (err) {
      dispatch({
        type: FICHE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };
  export const getSousCategorieFiche2 = (categorie) => async (dispatch) => {
    try {
      const res = await axios.get(
        `/api/fichev/souscategorieFiche/${categorie}`
      );
  
      dispatch({
        type: GET_SOUSCATEGORIEFICHE2,
        payload: res.data,
      });
  
    } catch (err) {
      dispatch({
        type: FICHE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };
  
  export const getMatriceCometance = (formData) => async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await axios.get(
        `/api/fichev/getcompetance`,   formData,
        config
      );
  
      dispatch({
        type: GET_MATRICE,
        payload: res.data,
      });
  
    } catch (err) {
      dispatch({
        type: FICHE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };