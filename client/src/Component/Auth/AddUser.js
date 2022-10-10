import React,{useState} from 'react'
import { addUser } from '../../actions/auth';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { SetAlert } from '../../actions/alert';
import Aside from '../Layout/Aside';

function AddUser({addUser,SetAlert}) {
    const [fromData, setFormData] = useState({
        firstname: '',
        lastname: '',
        Phone:216,
        email: '',
        password: '',
        password2: '',
        Address: '',
        Address: '',
        typeuser:'SuperAdmin'
      });
      const {
        firstname,
        lastname,
        Phone,
        email,
        password,
        password2,
        Address,
        typeuser
      } = fromData;
      const hundelchange = (e) =>
        setFormData({ ...fromData, [e.target.name]: e.target.value });
      const onsubmit = (e) => {
        e.preventDefault();
        if (password !== password2) SetAlert('Password do not match', 'danger');
        else {
            addUser({
            firstname,
            lastname,
            Phone,
            email,
            password,
            password2,
            Address,
            typeuser
          });
          
        }
      };
  return (
    <div>
  <div class="g-sidenav-show   bg-gray-100">
    {/* <div class="min-height-300 bg-primary position-absolute w-100"></div> */}
<Aside/>
<div  class="main-content position-relative border-radius-lg ">
<div class="container-fluid py-4 fix-table">
<div class="card-header pb-0 fixtable">
        <h6>Add User</h6>
      </div>
<div class="row">
  <div class="col-12">



 
<form role="form" onSubmit={(e) => onsubmit(e)}>

<div class="mb-3">
  <input
className='form-control'
type='text'
placeholder='First Name'
name='firstname'
value={firstname}
onChange={(e) => hundelchange(e)}
/>
</div>
<div class="mb-3">
  <input
className='form-control'
type='text'
placeholder='Last Name'
name='lastname'
value={lastname}
onChange={(e) => hundelchange(e)}
/>
</div>
<div class="mb-3">
  <input
className='form-control'
type='email'
placeholder='Email'
name='email'
value={email}
onChange={(e) => hundelchange(e)}
/>
</div>
<div class="mb-3">
  <input
className='form-control'
type='password'
placeholder='Password'
name='password'
value={password}
minLength='6'
onChange={(e) => hundelchange(e)}
/>
</div>
<div class="mb-3">
  <input
className='form-control'
type='password'
placeholder='Confirm Password'
minLength='6'
name='password2'
value={password2}
onChange={(e) => hundelchange(e)}
/>
</div>
<div class="mb-3">
<select
            className=' typeuser'
            name='typeuser'
            value={typeuser}
            onChange={(e) => hundelchange(e)}
            >
            <option className='option-type-profile'>SuperAdmin</option>
            <option className='option-type-profile'>Admin</option>
            <option className='option-type-profile'>Consultant</option>
          </select>
          </div>
<div class="mb-3">
<input
className='form-control'
type='number'
placeholder='Phone Number'
name='Phone'
value={Phone}
onChange={(e) => hundelchange(e)}
/>                </div>
<div class="mb-3">
<input
className=' form-control'
name='Address'
value={Address}
placeholder="Address"
onChange={(e) => hundelchange(e)}
/> 
</div>


<div class="text-center">
  <button type="submit" class="btn bg-gradient-dark w-100 my-4 mb-2">Sign up</button>
</div>
<p class="text-sm mt-3 mb-0">Already have an account? <a href="javascript:;" class="text-dark font-weight-bolder">Sign in</a></p>
</form>
</div>
  </div>
  </div>
  </div>
  </div>
    </div>
  )
}
  export default connect(null, { SetAlert, addUser })(AddUser);
