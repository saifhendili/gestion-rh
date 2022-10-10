import axios from 'axios';
import { SetAlert } from './alert';
import {GET_SOUSCATEGORIE,EDIT_COMPETANCETRANS,EDIT_DIMENSIONNEMNT,EDIT_INDICATEUR,
    ADD_FICHE,GET_FICHETWO,
    FICHE_ERROR,ADD_CLIENT_POST,
    ADD_FOURNISSEUR_POST, GET_FICHE,ADD_CARAC,
    ADD_COMPETENCEMETIER,ADD_AUTRERES,ADD_INDICATEURDEPERF
    ,ADD_COMPETENCEDIMENSIONNEMENT,ADD_COMPETENCEMANAGERIALS,
    ADD_COMPETENCETRANSVERSES,ADD_COMPETENCECOMPORT, GET_FICHES,
    ADD_AUTREAPPELATION,ADD_ETATFICHE,ADD_RATTACHMENT,REMOVE_FICHE,EDIT_RATTACHMENT,
    EDIT_RESPON,EDIT_CLIENT,EDIT_FOURNISSEUR,EDIT_MYFICHE,GET_ALLCOMPETANCE,GET_CATEGORIE
} from './Types';


// Add fiche
export const addFiche = (formData) => async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
  
    try {
      const res = await axios.post(
        `/api/fiche/`,
        formData,
        config
      );
  
      dispatch({
        type: ADD_FICHE,
        payload: res.data,
      });
  
      dispatch(SetAlert('Fiche Added', 'success'));
    } catch (err) {
      dispatch({
        type: FICHE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };

  
// AddClientsDuPoste
export const AddClientsDuPoste = (id,formData) => async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
  
    try {
      const res = await axios.post(
        `/api/fiche/ClientsDuPoste/${id}`,
        formData,
        config
      );
  
      dispatch({
        type: ADD_CLIENT_POST,
        payload: res.data,
      });
  
      dispatch(SetAlert('Fiche Added', 'success'));
    } catch (err) {
      dispatch({
        type: FICHE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };
  
  
// AddClientsDuPoste
export const AddFournisseursDuPoste = (id,formData) => async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
  
    try {
      const res = await axios.post(
        `/api/fiche/FournisseursDuPoste/${id}`,
        formData,
        config
      );
  
      dispatch({
        type: ADD_FOURNISSEUR_POST,
        payload: res.data,
      });
  
      dispatch(SetAlert('Fiche Added', 'success'));
    } catch (err) {
      dispatch({
        type: FICHE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };

  
// AddClientsDuPoste
export const getFiche = (id) => async (dispatch) => {

    try {
      const res = await axios.get(
        `/api/fiche/${id}`,
      );
      dispatch({
        type: GET_FICHE,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: FICHE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };



  export const getFiche2 = (id) => async (dispatch) => {

    try {
      const res = await axios.get(
        `/api/fiche/${id}`,
      );
      dispatch({
        type: GET_FICHETWO,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: FICHE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };

// AddClientsDuPoste
export const getFiches = (id) => async (dispatch) => {

  try {
    const res = await axios.get(
      `/api/fiche/`,
    );

    dispatch({
      type: GET_FICHES,
      payload: res.data,
    });

  } catch (err) {
    dispatch({
      type: FICHE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};






  export const AddAutreResponsabilite = (id,formData) => async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
  
    try {
      const res = await axios.post(
        `/api/fiche/AutreResponsabilite/${id}`,
        formData,
        config
      );
  
      dispatch({
        type: ADD_AUTRERES,
        payload: res.data,
      });
  
      dispatch(SetAlert('Fiche Added', 'success'));
    } catch (err) {
      dispatch({
        type: FICHE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };


  
  export const AddCaracteristiqueDuPoste = (id,formData) => async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
  
    try {
      const res = await axios.post(
        `/api/fiche/CaracteristiqueDuPoste/${id}`,
        formData,
        config
      );
  
      dispatch({
        type: ADD_CARAC,
        payload: res.data,
      });
  
      dispatch(SetAlert('Fiche Added', 'success'));
    } catch (err) {
      dispatch({
        type: FICHE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };

  
  
  export const AddCompetencesMetier = (id,formData) => async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
  
    try {
      const res = await axios.post(
        `/api/fiche/CompetencesMetier/${id}`,
        formData,
        config
      );
  
      dispatch({
        type: ADD_COMPETENCEMETIER,
        payload: res.data,
      });
  
      dispatch(SetAlert('Fiche Added', 'success'));
    } catch (err) {
      dispatch({
        type: FICHE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };

  
  
  export const AddCompetencesComportementales = (id,formData) => async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
  
    try {
      const res = await axios.post(
        `/api/fiche/CompetencesComportementales/${id}`,
        formData,
        config
      );
  
      dispatch({
        type: ADD_COMPETENCECOMPORT,
        payload: res.data,
      });
  
      dispatch(SetAlert('Fiche Added', 'success'));
    } catch (err) {
      dispatch({
        type: FICHE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };

  
  export const AddCompetencesManagerials = (id,formData) => async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
  
    try {
      const res = await axios.post(
        `/api/fiche/CompetencesManagerials/${id}`,
        formData,
        config
      );
  
      dispatch({
        type: ADD_COMPETENCEMANAGERIALS,
        payload: res.data,
      });
  
      dispatch(SetAlert('Fiche Added', 'success'));
    } catch (err) {
      dispatch({
        type: FICHE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };

  
  export const AddCompetencesTransverses = (id,formData) => async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
  
    try {
      const res = await axios.post(
        `/api/fiche/CompetencesTransverses/${id}`,
        formData,
        config
      );
  
      dispatch({
        type: ADD_COMPETENCETRANSVERSES,
        payload: res.data,
      });
  
      dispatch(SetAlert('Fiche Added', 'success'));
    } catch (err) {
      dispatch({
        type: FICHE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };

  
  export const AddDimensionnementDuPoste = (id,formData) => async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
  
    try {
      const res = await axios.post(
        `/api/fiche/DimensionnementDuPoste/${id}`,
        formData,
        config
      );
  
      dispatch({
        type: ADD_COMPETENCEDIMENSIONNEMENT,
        payload: res.data,
      });
  
      dispatch(SetAlert('Fiche Added', 'success'));
    } catch (err) {
      dispatch({
        type: FICHE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };

  
  export const AddIndicateursDePerformance = (id,formData) => async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
  
    try {
      const res = await axios.post(
        `/api/fiche/IndicateursDePerformance/${id}`,
        formData,
        config
      );
  
      dispatch({
        type: ADD_INDICATEURDEPERF,
        payload: res.data,
      });
  
      dispatch(SetAlert('Fiche Added', 'success'));
    } catch (err) {
      dispatch({
        type: FICHE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };


  
  
  export const AddRattachements = (id,formData) => async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
  
    try {
      const res = await axios.post(
        `/api/fiche/Rattachements/${id}`,
        formData,
        config
      );
  
      dispatch({
        type: ADD_RATTACHMENT,
        payload: res.data,
      });
  
      dispatch(SetAlert('Fiche Added', 'success'));
    } catch (err) {
      dispatch({
        type: FICHE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };


  
  export const AddEtatDeFiche = (id,formData) => async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
  
    try {
      const res = await axios.post(
        `/api/fiche/EtatDeFiche/${id}`,
        formData,
        config
      );
  
      dispatch({
        type: ADD_ETATFICHE,
        payload: res.data,
      });
  
      dispatch(SetAlert('Fiche Added', 'success'));
    } catch (err) {
      dispatch({
        type: FICHE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };


  
  
  export const AddAutreAppelations = (id,formData) => async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
  
    try {
      const res = await axios.post(
        `/api/fiche/AutreAppelations/${id}`,
        formData,
        config
      );
  
      dispatch({
        type: ADD_AUTREAPPELATION,
        payload: res.data,
      });
  
      dispatch(SetAlert('Fiche Added', 'success'));
    } catch (err) {
      dispatch({
        type: FICHE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };




  
  
  export const DeleteFiche = (id) => async (dispatch) => {
 
  
    try {
      const res = await axios.delete(
        `/api/fiche/${id}`,
    
      );
  
      dispatch({
        type: REMOVE_FICHE,
        payload: res.data,
      });
  
      dispatch(SetAlert('Fiche Deleted', 'success'));
    } catch (err) {
      dispatch({
        type: FICHE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };




  
  export const EditRatachment = (id,idr,data) => async (dispatch) => {
 
  
    try {
      const res = await axios.put(
        `/api/fiche/Ratachment/${id}/${idr}`,data
    
      );
  
      dispatch({
        type: EDIT_RATTACHMENT,
        payload: res.data,
      });
  
      dispatch(SetAlert('Fiche Deleted', 'success'));
    } catch (err) {
      dispatch({
        type: FICHE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };

  
  export const editmyFournisseur = (id,idr,data) => async (dispatch) => {
 
  
    try {
      const res = await axios.put(
        `/api/fiche/Fournisseur/${id}/${idr}`,data
    
      );
  
      dispatch({
        type: EDIT_FOURNISSEUR,
        payload: res.data,
      });
  
      dispatch(SetAlert('Fiche Deleted', 'success'));
    } catch (err) {
      dispatch({
        type: FICHE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };

  
  export const EditClient = (id,idr,data) => async (dispatch) => {
 
  
    try {
      const res = await axios.put(
        `/api/fiche/Clients/${id}/${idr}`,data
    
      );
  
      dispatch({
        type: EDIT_CLIENT,
        payload: res.data,
      });
  
      dispatch(SetAlert('Fiche Deleted', 'success'));
    } catch (err) {
      dispatch({
        type: FICHE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };

  
  export const EditAutreResponsabilite = (id,idr,data) => async (dispatch) => {
 
  
    try {
      const res = await axios.put(
        `/api/fiche/AutreResponsabilite/${id}/${idr}`,data
    
      );
  
      dispatch({
        type: EDIT_RESPON,
        payload: res.data,
      });
  
      dispatch(SetAlert('Fiche Deleted', 'success'));
    } catch (err) {
      dispatch({
        type: FICHE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };



  
  export const EditMyFiche = (id,data) => async (dispatch) => {
 
  
    try {
      const res = await axios.put(
        `/api/fiche/fiche/${id}`,data
    
      );
  
      dispatch({
        type: EDIT_MYFICHE,
        payload: res.data,
      });
  
      dispatch(SetAlert('Fiche Updated', 'success'));
    } catch (err) {
      dispatch({
        type: FICHE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };

  
  
  export const getCategorie = () => async (dispatch) => {
    try {
      const res = await axios.get(
        `/api/fichev/competancecategorie`
      );
  
      dispatch({
        type: GET_CATEGORIE,
        payload: res.data,
      });
  
    } catch (err) {
      dispatch({
        type: FICHE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };
  
  
  export const getCompetance = () => async (dispatch) => {
    try {
      const res = await axios.get(
        `/api/fichev/competance`
      );
  
      dispatch({
        type: GET_ALLCOMPETANCE,
        payload: res.data,
      });
  
    } catch (err) {
      dispatch({
        type: FICHE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };
  
  
  export const getSousCategorie = (categorie) => async (dispatch) => {
    try {
      const res = await axios.get(
        `/api/fichev/souscategorie/${categorie}`
      );
  
      dispatch({
        type: GET_SOUSCATEGORIE,
        payload: res.data,
      });
  
    } catch (err) {
      dispatch({
        type: FICHE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };
  



  
  export const editmyCompetencesTransverses = (id,idr,data) => async (dispatch) => {
 
  
    try {
      const res = await axios.put(
        `/api/fiche/CompetencesTransverses/${id}/${idr}`,data
    
      );
  
      dispatch({
        type: EDIT_COMPETANCETRANS,
        payload: res.data,
      });
  
      dispatch(SetAlert('Fiche Edited', 'success'));
    } catch (err) {
      dispatch({
        type: FICHE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };
  
  export const editmyDimensionnementDuPoste = (id,idr,data) => async (dispatch) => {
 
  
    try {
      const res = await axios.put(
        `/api/fiche/DimensionnementDuPoste/${id}/${idr}`,data
    
      );
  
      dispatch({
        type: EDIT_DIMENSIONNEMNT,
        payload: res.data,
      });
  
      dispatch(SetAlert('Fiche EDITED', 'success'));
    } catch (err) {
      dispatch({
        type: FICHE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };
  
  export const editIndicateursDePerformance = (id,idr,data) => async (dispatch) => {
 
  
    try {
      const res = await axios.put(
        `/api/fiche/IndicateursDePerformance/${id}/${idr}`,data
    
      );
  
      dispatch({
        type: EDIT_INDICATEUR,
        payload: res.data,
      });
  
      dispatch(SetAlert('Fiche Deleted', 'success'));
    } catch (err) {
      dispatch({
        type: FICHE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };