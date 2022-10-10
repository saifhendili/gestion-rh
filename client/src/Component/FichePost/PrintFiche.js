import React,{useEffect,Fragment} from 'react'
import { Example } from './Print'
import { useSearchParams } from 'react-router-dom';
import { connect } from 'react-redux';
import Spinner from '../Layout/Spinner';
import { getFiche } from '../../actions/fiche';
import { GetUComportementales, getullistrationMangerials, getullistrationTechnique } from '../../actions/fichev';

function PrintFiche({GetUComportementales, getullistrationMangerials, getullistrationTechnique,getFiche,fiche:{fiche,loading,uteck,umanagerials,ucompotementales}}) {
    const [searchParams] = useSearchParams();

    useEffect(() => {
      getullistrationMangerials()
      getullistrationTechnique()
      GetUComportementales()
        getFiche(searchParams.get("id"));
      },[]);
      return loading || fiche === null|| uteck === null|| umanagerials === null ? (
        <Spinner />
      ) : (
        <Fragment>
 {/* <Example titre={fiche.titre} Description={fiche.Description} ClientsDuPoste={fiche.ClientsDuPoste}FournisseursDuPoste={fiche.FournisseursDuPoste}/> */}
 <Example {...fiche} fiche={fiche} />
 </Fragment>
  )

}

const mapStateToProps = (state) => ({
    fiche: state.fiche,
  });
  export default  connect(mapStateToProps, {getFiche,GetUComportementales, getullistrationMangerials, getullistrationTechnique}) (PrintFiche)
