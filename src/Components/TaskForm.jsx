
import React,{ useContext, useEffect, useState } from 'react';
import TaskContext from '../Context/TaskContext';
import AuthContext from '../Context/AuthContext';
// import { useNavigate } from 'react-router-dom';

const init = {
    title : '',
    description : '',
    duedate : ''
}

function TaskForm(props) {
    const [formData, setFormData] = useState(init);
    const {isUpdate, data , setIsUpdate ,btnRef, isPopup} = props;
    const {createTask , updateTask} = useContext(TaskContext);
    const {message, setmessage, user} = useContext(AuthContext)
    // const navigate =useNavigate()
    useEffect(()=>{
        setmessage('');
        if(isUpdate){
            setFormData(data);
        }
        
    },[isUpdate])
  

    const handleChange = (e) =>{
    let {name, value} = e.target;

    setFormData((prev)=>({
        ...prev,
         [name] : value,
         userId : user.id,
         modifiedOn : Date()
    }))
    }
   


    const submitForm =async(e)=>{
        e.preventDefault();
        createTask(formData);
        
            setFormData(init);
    
        
        
        // setTimeout(()=>{
        //     setmessage(null);
        //     // setFormData(false);
        //     // navigate('/')
            
        
        // },2000)

        // setmessage(null);
    }

    const editTask =async (e) =>{
        e.preventDefault();
        updateTask(formData);
        setFormData(init);
    }

   
const clearTask=(e)=>{
    e.preventDefault();
    setFormData(init);
    if(!isPopup){
      setIsUpdate(false);
    }else{
      btnRef.current.click();
    }
  }
  
//  useEffect(()=>{
//     if(isUpdate){
//     setIsUpdate(data);
//     }
//  },[data]);

    return (
        <div className='p-3 w-75'>
            <h3 className='mb-3 text-white'>{isUpdate? 'Update Task' : 'Create Task'}</h3>
            <div className="card">
                <div className="card-body">
            <form >
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input type="text" name="title" className='form-control' value={formData.title} onChange={handleChange}/>
                </div>

                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea name="description" className='form-control' value={formData.description} rows='8' onChange={handleChange}></textarea>
                </div>

                <div className="mb-3">
                    <label className="form-label">Date & Time</label>
                    <input type="datetime-local"  name="duedate"
                     className='form-control' value={formData.duedate}
                      onChange={handleChange}/>
                </div>
                <br />
                <p className='mb-3 '>{message}</p>
                {isUpdate?
                <>
                <button className='btn btn-success' onClick={editTask}>Update Task</button>
                <button className='btn btn-danger m-3' onClick={clearTask}>Cancel</button>
                </>:
                <button className='btn btn-primary' onClick={submitForm}>Create Task</button>
                    }
            </form>
            </div>
        </div>
        </div>
    );
}

export default TaskForm;