import React from 'react';
import Home from './Home';
import Student from './Student';
import Contact from './Contact';
import { Routes, Route, NavLink } from 'react-router-dom';
import EditStudent from './EditStudent';
import AddStudent from './AddStudent';

function RouteCompo() {
    return (
        <div>
            <div className='navflex'>
                <NavLink to="/"><h1>Home</h1></NavLink>
                <NavLink to="/student"><h1>Student</h1></NavLink>
                <NavLink to="/contact"><h1>Contact</h1></NavLink>
            </div>
            <Routes>
                <Route path="/contact" element={<Contact />}></Route>
                <Route path="/" element={<Home />}></Route>
                <Route path="/student" element={<Student />}></Route>
                <Route path="/editstudent" element={<EditStudent />}></Route>
                <Route path="/addstudent" element={<AddStudent />}></Route>
            </Routes>
        </div>
    )
}

export default RouteCompo