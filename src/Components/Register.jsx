import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../Context/AuthContext';




function Register(props) {
    const [formData,setFormData] = useState()
    const {message, register, setmessage} = useContext(AuthContext);

    useEffect(()=>{
        setmessage('');
          },[]);

const handleChange =(e)=>{
  
let {name, value} = e.target;
setFormData((prev)=>(
  {
    ...prev, [name] : value
  }
))
}


 const submitForm =async(event) =>{
    event.preventDefault();
        register(formData);
   
    }

//     const response =await fetch('http://localhost:5000/users',obj)
//     console.log(response);
//     if(response.ok){
//         setmessage('registered successfully ')
//     }
//     else{
//         setmessage('Something went wrong / please try again')
//     }
// }

    return (
        <div>
            <form>
        <div className="mb-3">
        <label htmlFor="fullName" className="form-label">Full Name :</label>
        <input type="text" name='name' className="form-control" id="fullName" aria-describedby="text" placeholder='Enter Your Name' onChange={handleChange}/>
        <div id="FullName" className="form-text">We'll never share your personal details with anyone else.</div>
        </div>
            <div className="mb-3">
        <label htmlFor="Email"  className="form-label">Email address :</label>
        <input type="email" name='email' className="form-control" id="Email" aria-describedby="emailHelp" placeholder='Enter Mail Id' onChange={handleChange}/>
        </div>
            <div className="mb-3">
        <label htmlFor="password" className="form-label">Password :</label>
        <input type="password" name='password' className="form-control" id="password" placeholder='Enter Password' onChange={handleChange}/>
        </div>
            <div className="mb-3 form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
            <fieldset className="row mb-4">
    <legend className="col-form-label col-sm-4 pt-0">Gender </legend> <br />
    <div className="col-sm-10">
            <div className="form-check">
        <input className="form-check-input" type="radio" name="gender" id="male" value="male" checked onChange={handleChange} />
        <label className="form-check-label" htmlFor="gridRadios1">
            Male
        </label>
    </div>
            <div className="form-check">
        <input className="form-check-input" type="radio" name="gender" id="female" value="female" onChange={handleChange} />
        <label className="form-check-label" htmlFor="gridRadios2">
            Female
        </label>
    </div>
</div>
</fieldset>
<p>{message}</p>
    <button type="submit" className="btn btn-primary" onClick={submitForm}>Register</button>
        <br />
    <div className="form-text">Having Problem in registering ? </div>
            <div id="registerHelp" className="form-text">Click for <a href={<Register />}> Help</a></div>
        </form>
    </div>
    );
    }

export default Register;

//promise function -they will always returns response  