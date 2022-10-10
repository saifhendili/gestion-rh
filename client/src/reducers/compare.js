import {GET_MATRICE,GET_SOUSCATEGORIEFICHE2,GET_CATEGORIEFICHE,GET_SOUSCATEGORIEFICHE,ADD_FICHE_COMPARE, ADD_FICHE_COMPARETWO} from '../actions/Types'
const stateliste={
  f1:"",
  f2:"",
  matrice:null,
  mycategorie:[],
  mysouscategorie:[],
    loading:true,
    mysouscategorie2:[]
}
export default function (state = stateliste, action) {
    const { type, payload } = action;
  
    switch(type)
    {

        case GET_MATRICE:return {
            ...state,
            matrice: payload,
            loading:false
        }

        case GET_CATEGORIEFICHE:
            return {
                ...state,
                mycategorie: payload,
                loading:false
            }
            case GET_SOUSCATEGORIEFICHE2:
                return {
                    ...state,
                    mysouscategorie2: payload,
                    loading:false
                }
                case GET_SOUSCATEGORIEFICHE:
                return {
                    ...state,
                    mysouscategorie: payload,
                    loading:false
                }

        case ADD_FICHE_COMPARE:
            return {
                ...state,
                f1: payload,
                loading:false
            }
            case ADD_FICHE_COMPARETWO:
                return {
                    ...state,
                    f2: payload,
                    loading:false
                }
        default: return state

    }
}
