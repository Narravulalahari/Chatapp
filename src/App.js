import React from "react";
import './App.css'
import MainContainer from "./Components/MainContainer";
import Login from "./Components/Login";
import {Route,Routes} from "react-router-dom";
import Welcome from "./Components/Welcome";
import Chatarea from "./Components/Chatarea";
import User_group from "./Components/User_group";
import Creategroup from "./Components/Creategroup";
import Users from "./Components/Users";
import Groups from "./Components/Groups";
function App() {
  return (
   <div className="App">
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="app" element={<MainContainer/>}>
        <Route path="welcome" element={<Welcome/>}></Route>
        <Route path="chat" element={<Chatarea/>}></Route>
        <Route path="users" element={<Users/>}></Route>
        <Route path="groups" element={<Groups/>}></Route>
        <Route path="create-group" element={<Creategroup/>}></Route>

      </Route>
    </Routes>
   {/* <MainContainer/> */}
   </div>
  );
}

export default App;
