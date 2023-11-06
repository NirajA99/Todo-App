import React, { useContext, useEffect, useState } from 'react';
// import Home from '../Pages/Home';
// import { useNavigate } from 'react-router-dom';
import AuthContext from '../Context/AuthContext';

function LogIn() {
  const [formData,setFormData] = useState()
  const {message, login, setmessage} = useContext(AuthContext);


  useEffect(()=>{
    setmessage('');
      },[]);

const handleChange =(e)=>{
  // console.log(e);
let {name, value} = e.target;
setFormData((prev)=>(
  {
    ...prev, [name] : value
  }
))
}
const submitForm = async(e) =>{
  e.preventDefault();
  login(formData);
}

    return (
      <form>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email address</label>
        <input type="email" name='email' className="form-control" id="email" placeholder='Enter Mail Id' onChange={handleChange}/>
        <div className="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Password</label>
        <input type="password"  name='password' className="form-control" id="password" placeholder='Enter Password' onChange={handleChange}/>
      </div>
      <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        <p>{message}</p>
      </div>
      <button type="submit" className="btn btn-primary" onClick={submitForm}>Login</button>
      <br />
      <div className="form-text">Forget Username / Password?</div>
      <div id="emailHelp" className="form-text">Click To Reset</div>
    </form>
    
    );
}

export default LogIn;