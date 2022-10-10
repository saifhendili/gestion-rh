import React,{useState,useEffect,Fragment} from 'react'
import { DeleteUsers, getUsers, loadUser } from '../../actions/auth'
import Aside from '../Layout/Aside'
import { connect } from 'react-redux';
import Spinner from '../Layout/Spinner';

function DashboardAdmin({loadUser,DeleteUsers,getUsers,auth:{users,user,loading}}) {
 useEffect(()=>{
  getUsers()
  loadUser()
 },[])
 
 return loading || users === null ? (
  <Spinner />
  ) : (
<div class="g-sidenav-show   bg-gray-100">
    {/* <div class="min-height-300 bg-primary position-absolute w-100"></div> */}
<Aside/>
<div  class="main-content position-relative border-radius-lg ">
<div class="container-fluid py-4 fix-table">
<div class="row">
  <div class="col-12">
    <div class="card mb-4">
      <div class="card-header pb-0 fixtable">
        <h6>Authors table</h6>
      </div>
      <div class="card-body px-0 pt-0 pb-2">
        <div class="table-responsive p-0">
          <table class="table align-items-center mb-0 mt-0">
            <thead>
              <tr>
                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Author</th>
                <th class="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Type User</th>
                <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Phone</th>
               
                <th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Creation Date</th>
               {user.typeuser=="SuperAdmin"?<th class="text-center text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Delete</th>:null}
                
              </tr>
            </thead>
            <tbody>
{users.map((x,i)=>
  <tr>
  <td>
    <div class="d-flex px-2 py-1">
      <div>
        <img src="https://avatar-management--avatars.us-west-2.prod.public.atl-paas.net/default-avatar.png" class="avatar avatar-sm me-3" alt="user6"/>
      </div>
      <div class="d-flex flex-column justify-content-center">
        <h5 class="mb-0 text-sm">{x.firstname} {x.lastname}</h5>
        <p class="text-xs text-secondary mb-0">{x.email}</p>
      </div>
    </div>
  </td>
  <td>
    <p class="text-xs font-weight-bold mb-0">{x.typeuser}</p>
  </td>
  <td class="align-middle text-center text-sm">
    <span class="badge badge-sm bg-gradient-secondary">{x.Phone}</span>
  </td>
  <td class="align-middle text-center">
    <span class="text-secondary text-xs font-weight-bold">{x.date}</span>
  </td>
  {user.typeuser=="SuperAdmin"?
  <td class="align-middle text-center">
    <button onClick={(e)=>DeleteUsers(x._id)} class="btn btn-danger">Delete</button>
  </td>:null}
</tr>
)}
            
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>

<footer class="footer pt-3  ">
  <div class="container-fluid">
    <div class="row align-items-center justify-content-lg-between">
      <div class="col-lg-6 mb-lg-0 mb-4">
        <div class="copyright text-center text-sm text-muted text-lg-start">
          © <script>
            document.write(new Date().getFullYear())
          </script>,
          made with <i class="fa fa-heart"></i> by
          <a href="https://www.creative-tim.com" class="font-weight-bold" target="_blank">Creative Tim</a>
          for a better web.
        </div>
      </div>
      <div class="col-lg-6">
        <ul class="nav nav-footer justify-content-center justify-content-lg-end">
          <li class="nav-item">
            <a href="https://www.creative-tim.com" class="nav-link text-muted" target="_blank">Creative Tim</a>
          </li>
          <li class="nav-item">
            <a href="https://www.creative-tim.com/presentation" class="nav-link text-muted" target="_blank">About Us</a>
          </li>
          <li class="nav-item">
            <a href="https://www.creative-tim.com/blog" class="nav-link text-muted" target="_blank">Blog</a>
          </li>
          <li class="nav-item">
            <a href="https://www.creative-tim.com/license" class="nav-link pe-0 text-muted" target="_blank">License</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</footer>
</div>
</div>
</div>  )
}
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default  connect(mapStateToProps, {loadUser,getUsers,DeleteUsers}) (DashboardAdmin)

