import  { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if(!passwordRegex.test(password)){
      setError('Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long')
    return;
  }
  try{
    await createUser(email, password);
    const currentUser = firebase.auth().currentUser;
    await currentUser.updateProfile({ displayName: name, photoURL: photoURL });
    
    alert('Registration successful! You can now login.');
  } catch (error) {
    setError(error.message);
  }
  }
  


  return (
    <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
      
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type='text' placeholder="Photo" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
         
        </div>
        {error && <div className="text-red-500">{error}</div>}
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
          
        </div>
        <div className='flex items-center justify-between'>
        <small>Already have an account?</small>
        <Link to='/login'><button className='btn btn-outline'>Please LogIn</button></Link>
        </div>
      </form>
    </div>
  </div>
</div>
  );
};

export default Register;