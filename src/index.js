import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, NavLink} from 'react-router-dom';
import AddCourse from './components/AddCourse';

ReactDOM.render(
    <BrowserRouter>
        <ul>
            <li>
                <NavLink activeStyle={{color:'red'}} exact to="/">Home</NavLink>
            </li>
            <li>
                <NavLink  activeStyle={{color:'red'}} exact to="/add">Add Course</NavLink>
            </li>
            <li>
                <NavLink activeStyle={{color:'red'}} exact to="/details">Course Details</NavLink>
            </li>
        </ul>
       <Route path="/" exact component={App}/>
       <Route path="/add" exact component={AddCourse}/>

       <Route path="/details" exact render={
           ()=>{
              return (<h1>This is Course details page</h1>)
            }
        }/>
    </BrowserRouter>, 
    
    document.getElementById('root'));

