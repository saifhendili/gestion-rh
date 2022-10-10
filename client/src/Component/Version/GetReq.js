import React, { useEffect,Fragment } from 'react'
import { AcceptRequest,DeclineRequest, GetRequest } from '../../actions/fichev'
import Aside from '../Layout/Aside'
import Spinner from '../Layout/Spinner'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function GetReq({DeclineRequest,GetRequest,AcceptRequest,fiche:{loading,fiches}}) {
    useEffect(()=>{

        GetRequest()
    },[])
    return loading || fiches===null ? (
        <Spinner />
      ) : (
        <Fragment>
    <div class="g-sidenav-show   bg-gray-100">
    {/* <div class="min-height-300 bg-primary position-absolute w-100"></div> */}
<Aside/>
<div  class="main-content position-relative border-radius-lg ">
<div class="container-fluid py-4 fix-table">
<div class="row">
  <div class="col-12">
    <div class="card mb-4">
      <div class="card-header pb-0 fixtable">
        <h6>Request Edit</h6>
      </div>
      <div class="card-body px-0 pt-0 pb-2">
        <div class="table-responsive p-0">
          <table class="table align-items-center mb-0 mt-0">
            <thead>
              <tr>
              <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Titre</th>
              <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Sous Categorie</th>

                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">UserName</th>
                <th class="text-secondary opacity-7">Accept</th>

                <th class="text-secondary opacity-7">Details</th>
                <th class="text-secondary opacity-7">Delete</th>
              </tr>
            </thead>
            <tbody>
          
             {fiches.map((fiche,i)=>
         <Fragment key={i}>
        <tr> 
         <td>
             <div class="d-flex px-2 py-1">
               
               <div class="d-flex flex-column justify-content-center">
                 <h5 class="mb-0 text-sm">{fiche.titre}</h5>
               </div>
             </div>
           </td>
           <td class="align-middle text-center text-sm">
             <span class="badge badge-sm bg-gradient-secondary">{fiche.SousCategorie}</span>
           </td>
           <td>
             <p class="text-xs text-secondary mb-0">{fiche.firstname} {fiche.lastname}</p>
           </td>
           <td class="align-middle">
          <a onClick={e=>AcceptRequest(fiche._id)} className='btn btn-primary' >Accept</a>
          </td>
       
           <td class="align-middle">
          <Link to={`/details-request?id=${fiche._id}`}  className='btn'>Details</Link>
          </td>
          
        

          <td class="align-middle">
          <a onClick={(e)=>DeclineRequest(fiche._id)} className='btn btn-danger buttondangerlist' >Delete</a>
          </td>
          
         
         </tr>
         </Fragment>
             )}
          
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>


</div>
</div>
</div> 
</Fragment> )

}
const mapStateToProps = (state) => ({
    fiche: state.fiche,
  });
  export default connect(mapStateToProps, {DeclineRequest, GetRequest,AcceptRequest })(GetReq);