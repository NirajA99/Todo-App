
import './App.css';


import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import CreateTask from "./Pages/CreateTask";
import TaskList from "./Pages/TaskList";
import Profile from "./Pages/Profile";
import PageNotFound from "./Pages/PageNotFound";
import Navigations from './Components/Navigations';
import Login from './Components/LogIn';
import Register from './Components/Register';
import { AuthProvider } from './Context/AuthContext';
import { TaskProvider } from './Context/TaskContext';

function App() {
  return (
    <BrowserRouter>
    <AuthProvider>
      <TaskProvider>
    <Navigations />
      <Routes>
        <Route path='/' element={<Navigate to={'/login'} />}></Route>
          <Route path="/" element={<Home />}>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/register' element={<Register/>}></Route>
          </Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/CreateTask" element={<CreateTask />}></Route>
          <Route path="/TaskList" element={<TaskList />}></Route>
          <Route path="/Profile" element={<Profile />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
      </TaskProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
