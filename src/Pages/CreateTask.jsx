import React, {  useContext,  useState } from 'react';
import TaskForm from '../Components/TaskForm';

import TaskContext from '../Context/TaskContext';
import { Link } from 'react-router-dom';

import { dateFormat } from '../Helpers/Index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';


function CreateTask(props) {
  const { latestTask, recentTask } = useContext(TaskContext);
  const [isUpdate, setIsUpdate] = useState(false);
  // const {setmessage} = useContext(AuthContext)
  // const [clearmsg, setClearmsg] = useState(false)

  // useEffect(()=>{
  //   setmessage('');
  //     }, [])
  // onchange fucnction
  // const state
  // helper setisupdate for update the tasks

const updateTask=() =>{
  setIsUpdate(true)
}







  return (
    <div className="container-fluid h-100">
      <div className="row h-100">
        <div className="col-md-5 bg-primary text-white  h-100 d-flex flex-column align-items-center justify-content-center">
          <TaskForm isUpdate={isUpdate}  data={latestTask} setIsUpdate={setIsUpdate}/>
          {/* //is update| data= vanish task  */}
        </div>
        <div className="col-md-7 d-flex flex-column align-items-center justify-content-center">
          <div className="card mb-3 home-card bg-primary text-white w-75 shadow-sm rounded-0">
            <div className="card-header bg-transparent border-0 d-flex">
              <h3>Latest-Task</h3>
              <button className='btn btn-danger ms-auto' onClick={updateTask} >Edit Task</button>
            </div>

            <div className="card-body p-4">
              {latestTask ?
                <>
                  <p className='border-bottom pb-3'>{latestTask?.title}</p>
                  <br /><br /><br /><br />
                  <p className='mb-3'>Description : 
                    {latestTask?.description}</p><br />

                  <p className='mb-3'>Created On :
                    {dateFormat(latestTask.modifiedOn)}
                  </p>
                  <p className='mb-3'>Due On :
                    {dateFormat(latestTask.duedate)}</p>
                  
                </> : " "
              }
            </div>

            
          </div>
          <div className="card home-card bg-primary text-white w-75 shadow-sm rounded-0">
            <div className="card-header bg-transparent border-0 d-flex">
              <h3>Recent-Task</h3>      <FontAwesomeIcon icon={faStar} spin style={{color: "#88dce7",}} size="2xl" />
              {/* <button className='btn btn-danger ms-auto' >Edit Task</button> */}
            </div>

            <div className="card-body p-4 ">
              {recentTask?
              recentTask.map((item)=>{
                return(
                  <div key={item.id} className="d-flex  bg-light text-dark rounded-pill p-1 m-2">
                    <p>{item.title}</p>
                    <p className='ms-auto'>{dateFormat(item.duedate)}</p>
                  </div>
                )
              })
              :
                " "
              }
              <Link className="text-secondary mb-3" to='/tasklist'>View More...</Link>
            </div>

            
          </div>
        </div>
      </div>
    </div>

  );
}

export default CreateTask;