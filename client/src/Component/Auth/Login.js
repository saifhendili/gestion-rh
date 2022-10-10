import React, { Fragment, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Link, Navigate } from 'react-router-dom';
import { login } from '../../actions/auth';


import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function Login({ login, isAuthenticated }) {
  const [fromData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { email, password } = fromData;
  const hundelchange = (e) =>
    setFormData({ ...fromData, [e.target.name]: e.target.value });
  const onsubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };
  if (isAuthenticated) {
    return <Navigate to='/dashboard' />
  }
  return (
    <div>
    <main class="main-content  mt-0">
        <section>
          <div class="page-header min-vh-100">
            <div class="container">
              <div class="row">
                <div class="col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-lg-0 mx-auto">
                  <div class="card card-plain">
                    <div class="card-header pb-0 text-start">
                      <h4 class="font-weight-bolder">Sign In</h4>
                      <p class="mb-0">Enter your email and password to sign in</p>
                    </div>
                    <div class="card-body">
                    <form  role="form" onSubmit={(e) => onsubmit(e)}>
                        <div class="mb-3">
               <input type="email" class="form-control form-control-lg" placeholder="Email" aria-label="Email"
                            name='email'
                            value={email}
                            onChange={(e) => hundelchange(e)}
                            required/>
                        </div>
                        <div class="mb-3">
                          <input type="password" class="form-control form-control-lg" placeholder="Password" aria-label="Password"
                          
                       
                          name='password'
                          value={password}
                          minLength='6'
                          onChange={(e) => hundelchange(e)}
                          required/>
                        </div>
                        <div class="form-check form-switch">
                          <input class="form-check-input" type="checkbox" id="rememberMe"/>
                          <label class="form-check-label" for="rememberMe">Remember me</label>
                        </div>
                        <div class="text-center">
                          <button type="submit" class="btn btn-lg btn-primary btn-lg w-100 mt-4 mb-0">Sign in</button>
                        </div>
                      </form>
                    </div>

                  </div>
                </div>
                <div class="col-6 d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-10 end-0 text-center justify-content-center flex-column ">
                  <div class="position-relative bg-gradient-primary h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center overflow-hidden ">
                    <span class="mask bg-gradient-primary opacity-6 fixcolorsignin"></span>
                    <h4 class="mt-5 text-white font-weight-bolder position-relative">"Welcome To OneTech"</h4>
                    <p class="text-white position-relative">Your Engineering & Manufacturing Global Partner</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { login })(Login);