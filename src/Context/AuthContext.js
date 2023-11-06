import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const AuthContext = createContext();

export const AuthProvider=({children})=>{
    const [user, setUser] = useState(null);
    const [message, setmessage] = useState(null);
    const navigate = useNavigate();



//Register data
const register =async(formData) =>{
    

    const obj ={
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify(formData)
    }
    
    try{
    const checkUser = await fetch(`http://localhost:5000/users?email=${formData.email}`, {method : 'GET'})
    if(checkUser.ok){
        const user = await checkUser.json();
        if(user.length > 0 ){
            setmessage('Name Already Exist');
        }
        else{
            const response =await fetch('http://localhost:5000/users',obj)
            
            // console.log(response);
            if(response.ok){
                setmessage('Registered Successfully !')
            const userData = await response.json();
            localStorage.setItem('user',JSON.stringify(userData));
            setUser(userData);
            setTimeout(()=>{
                navigate('/profile');
            },3000)
            }
            else{
                setmessage('Something went wrong / please try again');
            }
        
            }   
        }
        else
        {
            setmessage('please try again');
        }
    }catch(err){
        console.log(err);
    }
    }





//Login data
const login = async(formData) =>{
    try{
    const response =await fetch(`http://localhost:5000/users?email=${formData.email}&password=${formData.password}`, {method : 'GET'});
    const user = await response.json();
    // console.log(result);
    if(response.ok){
      if(user.length > 0 ){
        setmessage('login successfully !');
        const userData = JSON.stringify(user[0]);
        localStorage.setItem('user' ,userData);
        setUser(user[0]);
        setTimeout(()=>{
          navigate('/create-task');
        },3000)
      }
    else{
      setmessage('user not found');
    }
  }
  else{
    setmessage('invalid details , please try again');
  }
}catch(err){
    console.log(err);
} 
  

}
useEffect(()=>{
    const localUser = localStorage.getItem('user');
    
    const getUser =async ()=>{
        const user = JSON.parse(localUser);
        try{
            const response = await fetch(`http://localhost:5000/users?email=${user.email}`)
            if (response.ok) {
                const existingUser = await response.json();
                if(existingUser.length > 0){
                setUser(existingUser[0]);
            }
            }else{
                console.error("something went wrong");
              } 
            }
            catch(err){
                console.log(err);
            }
       
    }
    if(localUser ){
       getUser();
    
    }
   
  },[])




    return(
    <AuthContext.Provider value={{
        user,
        message,
        setmessage,
        setUser,
        register,
        login,
        navigate
    }}>
        {children}
    </AuthContext.Provider>
    )
}

export default AuthContext;