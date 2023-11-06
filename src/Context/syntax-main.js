// import { createContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const AuthContext = createContext()
// export const AuthProvider=({children})=>{
//     const [user,setUser] = useState(null);
//     const [message, setmessage] = useState('');
//     const navigate = useNavigate();

// //Register data
// const register =async(formData) =>{

//     const obj ={
//         method : 'POST',
//         headers : {
//             'Content-Type' : 'application/json'
//         },
//         body : JSON.stringify(formData)
//     }

//     const checkUser = await fetch(`http://localhost:5000/users?email=${formData.email}`, {method : 'GET'})
//     if(checkUser.ok){
//         const name = await checkUser.json();
//         if(name.length > 0 ){
//             setmessage('Name Already Exist');
//         }
//         else{
//             const response =await fetch('http://localhost:5000/users',obj)

//             console.log(response);
//             if(response.ok){
//                 setmessage('registered successfully ')
//             const userData = await response.json();
//             localStorage.setItem('user',JSON.stringify(userData));
//             setUser(userData);
//             setTimeout(()=>{
//                 navigate('/tasklist');
//             },3000)
//             }
//             else{
//                 setmessage('Something went wrong / please try again')
//             }

//             }
//         }
//         else
//         {
//             setmessage('please try again');
//         }
//     }

// //Login data
// const login = async(formData) =>{

//     const result =await fetch(`http://localhost:5000/users?email=${formData.email}&password=${formData.password}`, {method : 'GET'});
//     const user = await result.json();
//     console.log(result);
//     if(result.ok){
//       if(user.length > 0 ){
//         setmessage('login successfully');
//         const userData = JSON.stringify(user[0]);
//         localStorage.setItem('user' ,userData);
//         setUser(userData);
//         setTimeout(()=>{
//           navigate('/prOfile');
//         },3000)
//       }
//     else{
//       setmessage('user not found');
//     }
//   }
//   else{
//     setmessage('invalid details , please try again');
//   }

// }
// useEffect(()=>{
//     const localUser = localStorage.getItem('user');
//     const user = JSON.parse(localUser);
//     setUser(user);
//   },[])

//     return(
//     <AuthContext.Provider value={{
//         user,
//         message,
//         register,
//         login
//     }}>
//         {children}
//     </AuthContext.Provider>
//     )
// }

// export default AuthContext;
