import React from 'react';
// import aj from '../src/aj-logo.png';
// import shampi from '../src/shampi.jpeg';

 function SignIn() {
  
  return (

     <div className='content'>
      <div className='sign'>Sign in</div>
      <div class="form-floating mb-3">
       <input type="email" class="form-control" id="floatingInput" placeholder="Enter email or username"/>
      </div>
     <div class="form-floating">
       <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
      </div>
     <button type="button" class="btn btn-primary">SIGN IN</button>
     <div className='continue'>or&nbsp;continue&nbsp;with</div>
    </div>
  )
}
export default SignIn;