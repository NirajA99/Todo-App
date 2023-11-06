import React, { useContext, useRef } from 'react';
import TaskForm from './TaskForm';
import TaskContext from '../Context/TaskContext';
import AuthContext from '../Context/AuthContext';
import { dateFormat } from '../Helpers/Index';

function PopUp(props) {
  const {option} = props;
  const {type , data} =option;

  const{deleteTask} =useContext(TaskContext);
  const {message} = useContext(AuthContext);
  const closeButton = useRef(null);
  
  const onDelete = () =>{
    deleteTask(data.id);
  };

    return (
        
            <div className="modal" tabIndex="-1" id='task-modal'>
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content bg-primary">
    <div className="modal-header">
    <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              ref={closeButton}
            ></button>
      
              <div className="modal-body">
        {
          type === 'view'? (
          <div>
            <h3>{data.title}</h3>
            <p>{data.description}</p>
            
            <div className="d-flex">
            <p>
              Modified On : {dateFormat(data.modifiedOn)} 
            </p>
            <p>Due Date : {dateFormat(data.duedate)}</p>
            </div>
            
          </div> 
          ) :
            type === 'update' ? (
            <div>
              <TaskForm 
               isUpdate={true} 
               data={data}
                btnRef={closeButton} 
                isPopup={true}/> 
            </div> 
           ) : (
            <div className='text-white p-5'>
              <p>
                  {
                  message !== "" ? message : 
                  "Are you sure you want to delete this task?"
                  }
                </p>
              <div className="d-flex">
              <button className="btn btn-danger ms-auto" onClick={onDelete}>Yes</button>
              <button className='btn btn-secondary ms-2' data-bs-dismiss='modal'
      aria-label='Close'>No</button>
              </div>
            </div>
           )
          }
      </div>
     
    </div>
  </div>
</div>
</div>
        
    );
}

export default PopUp;