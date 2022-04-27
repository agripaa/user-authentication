import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Register.css';

const Register = () => {
  return (
    <div>
        <div className='container shadow my-4'>
            <div className='row justify-content-end'>
                <div className='col-md-5 d-flex flex-column align-items-center justify-content-center form order-2'>
                    <h1 className='display-4 fw-bolder'>Hello, There!</h1>
                    <p className='lead text-center'>Enter Your Details to Register</p>
                    <h5 className='mb-4'>OR</h5>
                    <NavLink to='/login' className='btn btn-outline rounded-pill pb-2 w-50 log-btn'>Login</NavLink>
                </div>
                <div className='col-md-6 left-content'>
                    <h1 className='display-6 mb-5 text-bolder'>Register</h1>
                    <form>
                        <div class="mb-4">
                            <label for="name" class="form-label">Username</label>
                            <input type="text" class="form-control" id="name" placeholder='enter your name...' />
                        </div>
                        <div class="mb-4">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='enter your email...' />
                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div class="mb-4">
                            <label for="exampleInputPassword1" class="form-label">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder='enter your password...' />
                        </div>
                        <div class="mb-4 form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                            <label class="form-check-label" for="exampleCheck1">I Agree Terms and Conditions</label>
                        </div>
                        <button type="submit" class="btn btn-outline rounded-pill submit-btn w-100">Register</button>
                    </form>
                </div>
            </div>
        </div>
    </div>

  )
}

export default Register