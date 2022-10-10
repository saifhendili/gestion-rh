import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { DeleteFiche } from '../../actions/fiche'
import { connect } from 'react-redux';
import { loadUser } from '../../actions/auth';
import Spinner from '../Layout/Spinner';

function FicheItem({loadUser,fiche,auth:{user,loading},DeleteFiche,categorie}) {
  useEffect(()=>{
    loadUser()
  },[])
  return loading || user === null ? (
    <Spinner />
    ) :(     <Fragment>
    {fiche.Categorie==categorie? <tr> 
    <td>
        <div class="d-flex px-2 py-1">
          
          <div class="d-flex flex-column justify-content-center">
            <h5 class="mb-0 text-sm">{fiche.titre}</h5>
          </div>
        </div>
      </td>
      <td>
        <p class="text-xs text-secondary mb-0">{fiche.Categorie}</p>
      </td>
      <td class="align-middle text-center text-sm">
        <span class="badge badge-sm bg-gradient-secondary">{fiche.SousCategorie}</span>
      </td>
      <td class="align-middle">
     <Link to={`/print-fiche?id=${fiche._id}`}  className='btn'>Print</Link>
     </td>
     <td class="align-middle">
<Link  to={`/fiche?id=${fiche._id}`}  class="btn btn-primary" data-toggle="tooltip" data-original-title="Edit user">
Show
        </Link>
</td>
   {user.typeuser=="Consultant"? 
    
  null
     :   <td class="align-middle">
     <Link  to={`/Editfiche?id=${fiche._id}`}  className=' btn btn-secondary' >Edit</Link>

     </td>}
   {user.typeuser=="SuperAdmin"? <td class="align-middle">
        
        <a className='btn btn-danger buttondangerlist' onClick={(e)=>DeleteFiche(fiche._id)}>Delete</a>
        </td> :null}
          
    
    </tr>:null}
    </Fragment>)
}
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { DeleteFiche ,loadUser})(FicheItem);
