import React, { useContext, useState } from "react";
import { Link, NavLink} from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";


const NavBar = () => {
  const { user, logOut, loading } = useContext(AuthContext);
  const [loggedOut, setLoggedOut] = useState(false);


  const handleLogOut = () => {
    logOut()
    .then(() => { console.log('logged out successfully');
    setLoggedOut(true);
      
    }).catch((error) => {
      console.log(error);
      
    });
  }
  
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/buynow">Buy Now</NavLink>
      </li>
      {
        user && <>
        <li>
        <NavLink to="">Update Profile</NavLink>
      </li>
      <li>
        <NavLink to="">User Profile</NavLink>
      </li>
        </>
      }
    </>
  );

  return (
 <>
 
     <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
           {loading ? (
              <li>Loading...</li>
            ) : (
              <>
                {links}
                <li>
                  <NavLink to="/">{user ? "Sign Out" : "Log In"}</NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
        <Link className="btn btn-ghost text-accent text-3xl font-extrabold">
          NOOR ProPerties
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
      {user && (
          <>
           <div>
           <span>{user.email}</span>
            <span>{user.displayName}</span>
            <span>{user.phoneNumber}</span>
            <span>{user.photoURL}</span>
           </div>
            <Link to='/login'><button onClick={handleLogOut} className="btn btn-accent">Sign Out</button></Link>
          </>
        )}
        {!user && !loggedOut && (
          <Link to='/login' className="btn btn-accent">Log In</Link>
        )}
       
      </div>
    </div>
 </>
  );
};

export default NavBar;
