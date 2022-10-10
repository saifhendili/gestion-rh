import axios from 'axios';
import { SetAlert } from './alert';
import {
  GET_UMANGERIALS, GET_UCOMPORTEMENTALES, GET_ULLISTRATIONTECK, GET_ALLMATRICES, DECLINE_REQUEST,DIMENSIONNEMENT_POSTV,ADD_COMPETANCETRANS_POSTV,ADD_INDICATEUR_POSTV, GET_MYVERSION,ADD_NEWFICHEE, GET_VERSION,GET_DETAILSREQUEST,ACCEPT_REQUEST,ADD_CLIENT_POSTV,ADD_FOURNISSEUR_POSTV,ADD_AUTRERESV,FICHE_ERROR,GET_REQUEST
} from './Types';



// AddClientsDuPoste
export const AddClientsDuPoste = (id,formData) => async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
  
    try {
      const res = await axios.post(
        `/api/fichev/ClientsDuPoste/${id}`,
        formData,
        config
      );
  
      dispatch({
        type: ADD_CLIENT_POSTV,
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
        `/api/fichev/FournisseursDuPoste/${id}`,
        formData,
        config
      );
  
      dispatch({
        type: ADD_FOURNISSEUR_POSTV,
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


  export const AddAutreResponsabilite = (id,formData) => async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
  
    try {
      const res = await axios.post(
        `/api/fichev/AutreResponsabilite/${id}`,
        formData,
        config
      );
  
      dispatch({
        type: ADD_AUTRERESV,
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


  export const GetRequest = () => async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
  
    try {
      const res = await axios.get(
        `/api/fichev/request`,
    
      );
  
      dispatch({
        type: GET_REQUEST,
        payload: res.data,
      });
  
    } catch (err) {
      dispatch({
        type: FICHE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };


  
  export const GetDetailsRequest = (id) => async (dispatch) => {
  
    try {
      const res = await axios.get(
        `/api/fichev/detailsreq/${id}`,
      );
  
      dispatch({
        type: GET_DETAILSREQUEST,
        payload: res.data,
      });
  
    } catch (err) {
      dispatch({
        type: FICHE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };

  
  export const AcceptRequest = (id) => async (dispatch) => {
  
    try {
      const res = await axios.put(
        `/api/fichev/Accept/${id}`,
      );
  
      dispatch({
        type: ACCEPT_REQUEST,
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



  export const DeclineRequest = (id) => async (dispatch) => {
  
    try {
      const res = await axios.put(
        `/api/fichev/decline/${id}`,
      );
  
      dispatch({
        type: DECLINE_REQUEST,
        payload: res.data,
      });
      dispatch(SetAlert('Decline Request', 'success'));
  
    } catch (err) {
      dispatch({
        type: FICHE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };

  
  export const getVersion = (id) => async (dispatch) => {
  
    try {
      const res = await axios.get(
        `/api/fichev/version/${id}`,
      );
  
      dispatch({
        type: GET_VERSION,
        payload: res.data,
      });
      // dispatch(SetAlert('Fiche Updated', 'success'));
  
    } catch (err) {
      dispatch({
        type: FICHE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };


   
  export const getmyVersion = (id,nbv) => async (dispatch) => {
  
    try {
      const res = await axios.get(
        `/api/fichev/version/${id}/${nbv}`,
      );
  
      dispatch({
        type: GET_MYVERSION,
        payload: res.data,
      });
      // dispatch(SetAlert('Fiche Updated', 'success'));

    } catch (err) {
      dispatch({
        type: FICHE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status },
      });
    }
  };
  
  export const AddNewFiche = (form) => async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await axios.post(
        `/api/fichev/addcometance/`,form,config
      );
  
      dispatch({
        type: ADD_NEWFICHEE,
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
export const AddCompetencesTransverses = (id,formData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const res = await axios.post(
      `/api/fichev/CompetencesTransverses/${id}`,
      formData,
      config
    );

    dispatch({
      type: ADD_COMPETANCETRANS_POSTV,
      payload: res.data,
    });

    dispatch(SetAlert('Competences Transverses Added', 'success'));
  } catch (err) {
    dispatch({
      type: FICHE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

 
// AddClientsDuPoste
export const AddDimensionnementDuPoste = (id,formData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const res = await axios.post(
      `/api/fichev/DimensionnementDuPoste/${id}`,
      formData,
      config
    );

    dispatch({
      type: DIMENSIONNEMENT_POSTV,
      payload: res.data,
    });

    dispatch(SetAlert('Dimensionnement Poste Added', 'success'));
  } catch (err) {
    dispatch({
      type: FICHE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

 
// AddClientsDuPoste
export const AddIndicateursDePerformance = (id,formData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const res = await axios.post(
      `/api/fichev/IndicateursDePerformance/${id}`,
      formData,
      config
    );

    dispatch({
      type: ADD_INDICATEUR_POSTV,
      payload: res.data,
    });

    dispatch(SetAlert('Indicateurs Performance Added', 'success'));
  } catch (err) {
    dispatch({
      type: FICHE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};


export const GetMatrices = () => async (dispatch) => {
  try {
    const res = await axios.get(
      `/api/competance`,
    );

    dispatch({
      type: GET_ALLMATRICES,
      payload: res.data,
    });
  
  } catch (err) {
    dispatch({
      type: FICHE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};


export const GetUComportementales = () => async (dispatch) => {
  try {
    const res = await axios.get(
      `/api/Ullistration/GetUComportementales`,
    );

    dispatch({
      type: GET_UCOMPORTEMENTALES,
      payload: res.data,
    });

  } catch (err) {
    dispatch({
      type: FICHE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
export const getullistrationTechnique = () => async (dispatch) => {
  try {
    const res = await axios.get(
      `/api//Ullistration/getullistrationTechnique`,
    );

    dispatch({
      type: GET_ULLISTRATIONTECK,
      payload: res.data,
    });

  } catch (err) {
    dispatch({
      type: FICHE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
export const getullistrationMangerials = () => async (dispatch) => {
  try {
    const res = await axios.get(
      `/api/Ullistration/addUComportementales`,
    );

    dispatch({
      type: GET_UMANGERIALS,
      payload: res.data,
    });

  } catch (err) {
    dispatch({
      type: FICHE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};




export const AdduTECK = (formData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const res = await axios.post(
      `/api/Ullistration/addUteck/`,
      formData,
      config
    );

  } catch (err) {
    dispatch({
      type: FICHE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const addUmanagerials = (formData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const res = await axios.post(
      `/api/Ullistration/addUmanagerials/`,
      formData,
      config
    );

  } catch (err) {
    dispatch({
      type: FICHE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};


export const addUComportementales = (formData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  try {
    const res = await axios.post(
      `/api/Ullistration/addUcComportementales/`,
      formData,
      config
    );

  } catch (err) {
    dispatch({
      type: FICHE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};