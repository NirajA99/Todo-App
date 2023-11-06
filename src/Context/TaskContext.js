import { createContext, useContext, useEffect, useState } from "react";
import AuthContext from "./AuthContext";

// import { useNavigate } from "react-router-dom";

const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    const { setmessage, user } = useContext(AuthContext);
    const [latestTask, setLatestTask] = useState(null);
    const [recentTask, setRecentTask] = useState(null);
    const [taskList, setTaskList] = useState(null);
    
    


    const createTask =async(formData) => {
        

        const object = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        };
    
try{
    const response =await  fetch ('http://localhost:5000/tasks',object);
    if (response.ok){
        setmessage('Task Created !');
    getAllTasks();
    setTimeout(() => {
        setmessage('');
    },2000);
   
}


    else{
        setmessage('Please try agian');
    }
}catch(err){
    console.log(err);
}
    }

//get tasks


const getAllTasks=async ()=>{
try{
    const response = await fetch(`http://localhost:5000/tasks?userId=${user.id}`, {method : 'GET'});
    if(response.ok){
        const tasks = await response.json();
        setTaskList(tasks);

        const latestTask = tasks[tasks.length -1];
        setLatestTask(latestTask);

        const recentTask =tasks.slice(-3).reverse();
        setRecentTask(recentTask);

    }else{
        alert('Something Went Wrong / Please try agian');
    }

}catch(err){
    console.log(err);
}

}

//editTask or Update
const updateTask =async(formData) => {
        

    const object = {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    };

try{
const response =await  fetch (`http://localhost:5000/tasks/${formData.id}`,object);
if (response.ok){
    setmessage('Task Updated !');
    let data = await response.json();
    getAllTasks(data);
setTimeout(() => {
    setmessage('');
},2000);

}


else{
    setmessage('Please try agian');
}
}catch(err){
console.log(err);
}
}

//delete task

const deleteTask =async(id)=>{


try{
    const response =await fetch(`http://localhost:5000/tasks/${id}`, {method : 'DELETE'});
    if (response.ok){
        setmessage('Task Deleted !');
        getAllTasks();
       setTimeout(()=>{
        setmessage('')
       },2000);
    }
    
    
    else{
        setmessage('Please try agian');
    }
    }catch(err){
    console.log(err);
    }
}

    
useEffect(()=>{
    if(user !== null){
        getAllTasks();
        
    }
    // setTimeout(
    //     navigate('/createtask')
    // ,3000)
    
}, [user])
    


    return( <TaskContext.Provider value={{
        createTask,
        taskList,
        latestTask,
        recentTask,
        updateTask,
        deleteTask
        
        
    }}>
        {children}
    </TaskContext.Provider>
    )
};

export default TaskContext;
