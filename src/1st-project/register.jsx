import React from 'react';
// import aj from '../src/aj-logo.png';
// import shampi from '../src/shampi.jpeg';
import '../src/index.css';

 function Register() {
  return (
    
    <div className='content'>
      <div className='sign'>Register Now</div>
      <div class="form-floating mb-3">
       <input type="email" class="form-control" id="floatingInput" placeholder="First Name"/>
      </div>
      <div class="form-floating mb-3">
       <input type="email" class="form-control" id="floatingInput" placeholder="Last Name"/>
      </div>
      <div class="form-floating mb-3">
       <input type="email" class="form-control" id="floatingInput" placeholder="+92 ^"/>
      </div>
      <div class="form-floating mb-3">
       <input type="email" class="form-control" id="floatingInput" placeholder="Enter email or username"/>
      </div>
     <div class="form-floating">
       <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
      </div>
     <button type="button" class="btn btn-primary">Register Now</button>
     <div className='continue'>or&nbsp;continue&nbsp;with</div>
    </div>
    
  )
}

export default Register;