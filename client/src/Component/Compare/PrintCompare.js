import React, { useEffect,Fragment,useState } from 'react'
import { connect } from 'react-redux';
import { getFiche,getFiche2 } from '../../actions/fiche';
import Spinner from '../Layout/Spinner'
import { Example } from './Compare';

function PrintCompare({getFiche,getFiche2,fiche:{fiche,fiche2,loading},compare:{f1,f2}}) {
    useEffect(()=>{
        getFiche(f1)
        getFiche2(f2)
    },[])

      return loading||fiche2==null ||fiche==null ? (
        <Spinner />
      ) : (
        <Fragment>
 <Example fiche={fiche} fiche2={fiche2}/>
 </Fragment>
  )

}


const mapStateToProps = (state) => ({
    compare: state.compare,
    fiche: state.fiche,

  });
  export default  connect(mapStateToProps, {getFiche,getFiche2}) (PrintCompare)
