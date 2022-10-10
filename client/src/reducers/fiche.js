
import {   DECLINE_REQUEST,  DIMENSIONNEMENT_POSTV,ADD_COMPETANCETRANS_POSTV,ADD_INDICATEUR_POSTV, GET_MYVERSION
,GET_ALLCOMPETANCE,GET_CATEGORIE,GET_SOUSCATEGORIE,
    ADD_FICHE,GET_FICHETWO,GET_UMANGERIALS, GET_UCOMPORTEMENTALES, GET_ULLISTRATIONTECK,
    FICHE_ERROR,
    ADD_CLIENT_POST,
    ADD_FOURNISSEUR_POST,
    GET_FICHE,
    GET_DETAILSREQUEST
    ,ADD_CARAC,GET_REQUEST,
    ADD_COMPETENCEMETIER,ADD_AUTRERES,ADD_INDICATEURDEPERF
    ,ADD_COMPETENCEDIMENSIONNEMENT,ADD_COMPETENCEMANAGERIALS,
    ADD_COMPETENCETRANSVERSES,ADD_COMPETENCECOMPORT,GET_FICHES,
    ADD_AUTREAPPELATION,ADD_ETATFICHE,ADD_RATTACHMENT,REMOVE_FICHE,
    EDIT_RATTACHMENT ,   EDIT_RESPON,EDIT_CLIENT,EDIT_FOURNISSEUR,EDIT_MYFICHE
    ,ADD_CLIENT_POSTV,ADD_FOURNISSEUR_POSTV,ADD_AUTRERESV,
    ACCEPT_REQUEST,GET_VERSION,ADD_NEWFICHEE,EDIT_COMPETANCETRANS,EDIT_DIMENSIONNEMNT,EDIT_INDICATEUR,GET_ALLMATRICES
  } from '../actions/Types';
 
  const initialState = {
    newFiche:null,

    loading: true,
    fiches: [],
    Souscategorie:[],
    MyCategorie:[],
    Competances:[],
    ClientsDuPoste:[],
    RequestVestion:null,
    versions:[],
    version:null,
    loadingv:true,
    FournisseursDuPoste:[],
    AutreResponsabilite:[],
    CaracteristiqueDuPoste:[],
    MyCompetencesMetier:[],
    MyCompetencesComportementales:[],
    MyCompetencesManagerials:[],
    MyCompetencesTransverses:[],
    DimensionnementDuPoste:[],
    MyIndicateursDePerformance:[],
    Rattachment:[],
    myEtatDeFiche:"",
    myAutreAppelations:"",
    fiche: null,
    id: null,
    error: {},
    fiche2:null,
    matrices:[],
    umanagerials:[],
    ucompotementales:[],
    uteck:[]
  };
  export default function (state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {

        case  GET_UMANGERIALS:  return {
            ...state,
            umanagerials: payload,
            loading: false,
        };
        case  GET_UCOMPORTEMENTALES:  return {
            ...state,
            ucompotementales: payload,
            loading: false,
        };
        case  GET_ULLISTRATIONTECK:  return {
            ...state,
            uteck: payload,
            loading: false,
        };

      case  GET_ALLMATRICES:  return {
            ...state,
            matrices: payload,
            loading: false,
        };

        case ADD_NEWFICHEE :  return {
            ...state,
            newFiche: payload,
            loading: false,
        };
        case EDIT_MYFICHE:  return {
            ...state,
            fiche: payload,
            loading: false,
        };
        case GET_DETAILSREQUEST:return{
            ...state,
            RequestVestion: payload,
            loading: false,
        
        }
        case GET_ALLCOMPETANCE:return{
            ...state,
            Competances: payload,
            loading: false,
        
        }  
          case GET_CATEGORIE:return{
            ...state,
            MyCategorie: payload,
            loading: false,
        
        }
        case GET_SOUSCATEGORIE:return{
            ...state,
            Souscategorie: payload,
            loading: false,
        }
        case GET_REQUEST:return{
            ...state,
            fiches: payload,
            loading: false,
        }
case GET_VERSION:
    return{
    ...state,
    versions: payload,
    loading: false,
}
case GET_MYVERSION :return{
    ...state,
    version: payload,
    loadingv: false,
}
        case ACCEPT_REQUEST:return{     ...state,
            fiches: payload,
            loading: false,
        }

        case DECLINE_REQUEST :return {
            ...state,
            fiches: payload,
            loading: false,
        }
       case EDIT_RATTACHMENT :
        return {
            ...state,
            Rattachment: payload,
            loading: false,
        };
        case EDIT_FOURNISSEUR :
            return {
                ...state,
                FournisseursDuPoste: payload,
                loading: false,
            };
            case EDIT_COMPETANCETRANS :
                return {
                    ...state,
                    MyCompetencesTransverses: payload,
                    loading: false,
                };
                case EDIT_DIMENSIONNEMNT :
                    return {
                        ...state,
                        DimensionnementDuPoste: payload,
                        loading: false,
                    };
                    case EDIT_INDICATEUR :
                        return {
                            ...state,
                            MyIndicateursDePerformance: payload,
                            loading: false,
                        };
            case EDIT_CLIENT :
                return {
                    ...state,
                    ClientsDuPoste: payload,
                    loading: false,
                };
                case EDIT_RESPON :
                    return {
                        ...state,
                        AutreResponsabilite: payload,
                        loading: false,
                    };
        case GET_FICHETWO:
            return {
                ...state,
                fiche2: payload,
                loading: false,
            };
      case GET_FICHES :
            return {
                ...state,
                fiches: payload,
                loading: false,
            };
        case GET_FICHE :
            return {
                ...state,
                fiche: payload,
                loading: false,
            };
      case ADD_FICHE:
            return {
                ...state,
                id: payload,
                loading: false,
            };
            case REMOVE_FICHE:
                return {
                  ...state,
                  fiches: payload,
                  loading: false,
                };
            
                case ADD_CLIENT_POSTV:
                    return {
                 ...state,
                 ClientsDuPoste:payload,
                 loading: false,
             };
        
          case ADD_CLIENT_POST:
               return {
            ...state,
            ClientsDuPoste:payload,
            loading: false,
        };
        case ADD_RATTACHMENT:
            return {
         ...state,
         Rattachment:payload,
         loading: false,
     };
     case ADD_AUTREAPPELATION:
        return {
     ...state,
     myAutreAppelations :payload,
     loading: false,
 };

 case ADD_ETATFICHE:
    return {
 ...state,
 myEtatDeFiche:payload,
 loading: false,
};

case ADD_FOURNISSEUR_POSTV:         
return {
    ...state,
    FournisseursDuPoste: payload,
    loading: false,
};

case DIMENSIONNEMENT_POSTV:         
return {
    ...state,
    DimensionnementDuPoste: payload,
    loading: false,
};
case ADD_COMPETANCETRANS_POSTV:         
return {
    ...state,
    MyCompetencesTransverses: payload,
    loading: false,
};
case ADD_INDICATEUR_POSTV:         
return {
    ...state,
    MyIndicateursDePerformance: payload,
    loading: false,
};
case ADD_FOURNISSEUR_POST:         
return {
    ...state,
    FournisseursDuPoste: payload,
    loading: false,
};
      case ADD_COMPETENCECOMPORT:
            
        return {
            ...state,
            fiche: payload,
            loading: false,
        };
        case ADD_COMPETENCETRANSVERSES:
        return {
            ...state,
            MyCompetencesTransverses: payload,
            loading: false,
        };
        case ADD_COMPETENCEMANAGERIALS:
            
        return {
            ...state,
            fiche: payload,
            loading: false,
        };
        case ADD_COMPETENCEDIMENSIONNEMENT:
            
        return {
            ...state,
            DimensionnementDuPoste: payload,
            loading: false,
        };case ADD_INDICATEURDEPERF:
            
        return {
            ...state,
            MyIndicateursDePerformance: payload,
            loading: false,
        };
        
        case  ADD_CARAC :return {
          ...state,
          fiche: payload,
          loading: false,
      };
      case ADD_COMPETENCEMETIER :return {
          ...state,
          fiche: payload,
          loading: false,
      };
      case  ADD_AUTRERES :return{
        ...state,
        AutreResponsabilite: payload,
        loading: false,
    };
     case  ADD_AUTRERESV :return{
        ...state,
        AutreResponsabilite: payload,
        loading: false,
    };
      

              case FICHE_ERROR:
                return {
                  ...state,
                  error: payload,
                  loading: false,
        
                };
  
      default:
        return state;
    }
  }