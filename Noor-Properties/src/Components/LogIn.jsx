import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const LogIn = () => {

  const { signInUser, signInGoogle } = useContext(AuthContext);
  const navigate = useNavigate();




  
  const handleLogin = e => {
    e.preventDefault();
    
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email, password)
    .then (result => {
      console.log(result.user)
      e.target.reset();
      navigate('/')
    })
    .catch(error => {
      console.error(error)})
  }


  const handleGoogleSignIn = () => {
    signInGoogle()
    .then(result=> {
      console.log(result.user)
    })
    .catch(error=> {
      console.error(error)
    })
   
  }





  return (
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          
         
        
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
    
      </form>

      <div className='flex items-center justify-between'>
        <small>Did not have an account?</small>
        <Link to='/register'><button>Please Register</button></Link>
        <button onClick={handleGoogleSignIn} className="label-text-alt font-bold text-l btn btn-ghost">GOOGLE</button>
        </div>
      
      
    </div>
  </div>
  
</div>
  );
};

export default LogIn;