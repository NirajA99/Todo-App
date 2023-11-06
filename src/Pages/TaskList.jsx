import React, { useContext, useReducer, useState } from 'react';
import { Link } from 'react-router-dom';
import TaskContext from '../Context/TaskContext';
import { dateFormat } from '../Helpers/Index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import PopUp from '../Components/PopUp';


function usereducer (state, action) {
    switch (action.type) {
        case 'view':
            return {type : 'view' , data : action.payload};
            break;
            case 'update':
                return {type : 'update' , data : action.payload};
                break;
                case 'delete':
                    return {type : 'delete' , data : action.payload};
                    break;
    
        default:
            return state
            break;
    }
}

function TaskList(props) {
    const {taskList} = useContext(TaskContext);
    const [state, dispatch] = useReducer(usereducer , 0);
    const [search, setSearch] = useState('')

    const handleSearch=(e)=>{
        let text = e.target.value;
        setSearch(text);
    }
    
    let filterTask = taskList?.filter(task => task.title.toLowerCase().includes(search.toLowerCase()))
    return (
        <div className="container bg-secondary p-5 text-white">
            <div className="d-flex">
                <h1>Task Lists</h1>
                <Link className='ms-auto' to='/createTask'>createTask</Link>
            </div>
            <input type="text" className='form-control my-3' placeholder='Search' onChange={handleSearch} />
            <p>{search}</p>
            <table className="table table-dark" >
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Title</td>
                        <td>Description</td>
                        <td>DueDate</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        taskList?
                        filterTask.map((tasks)=>{
                            // let tasks = items.reverse();
                            return(
                                <tr key={tasks.id}>
                                    <td>{tasks.id}</td>
                                    <td>{tasks.title}</td>
                                    <td>{tasks.description}</td>
                                    <td>{dateFormat(tasks.duedate)}</td>
                                    <td>
                                        <span className='px-2 ' data-bs-toggle="modal" data-bs-target="#task-modal" onClick={()=>{dispatch({type : 'view' , payload : tasks})}}>
                                        <FontAwesomeIcon icon={faEye} fade style={{color: "#ced0d4",}} />
                                        </span>
                                        <span className='px-2 ' data-bs-toggle="modal" data-bs-target='#task-modal' onClick={()=>{dispatch({type : 'update' , payload : tasks})}}>
                                        <FontAwesomeIcon icon={faPenToSquare}  style={{color: "#ced0d4",}} />
                                        </span>
                                        <span className='px-2 ' data-bs-toggle="modal" data-bs-target='#task-modal' onClick={()=>{dispatch({type : 'delete' , payload : tasks})}}>
                                        <FontAwesomeIcon icon={faTrashCan}  style={{color: "#ced0d4",}} />
                                        </span>
                                        
                                    </td>
                                    
                                </tr>
                                
                            )
                        }) : <tr><td>'No Tasks'</td></tr>
                    }
                </tbody>
            </table>
                    <PopUp option={state}  /> 
        </div>
    );
}

export default TaskList;