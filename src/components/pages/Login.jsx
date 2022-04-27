import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Login.css';

const Login = () => {
  return (
    <div id='login'>
        <div className='container shadow my-4'>
            <div className='row'>
                <div className='col-md-5 d-flex flex-column align-items-center justify-content-center form'>
                    <h1 className='display-4 fw-bolder'>Welcome Back!</h1>
                    <p className='lead text-center'>Enter Your Data To Login</p>
                    <h5 className='mb-4'>OR</h5>
                    <NavLink to='/register' className='btn btn-outline rounded-pill pb-2 w-50 log-btn'>Register</NavLink>
                </div>
                <div className='col-md-6 right'>
                    <h1 className='display-6 mb-5 text-bolder'>Login</h1>
                    <form>
                        <div class="mb-4">
                            <label for="email" class="form-label">Email Address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='enter your email...' />
                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div class="mb-4">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder='enter your password...' />
                        </div>
                        <div class="mb-4 form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                            <label class="form-check-label" for="exampleCheck1">Remember Me</label>
                        </div>
                        <button type="submit" class="btn btn-outline rounded-pill submit-btn w-100 ">Login</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login