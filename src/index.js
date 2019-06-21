import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import AddCourse from './components/AddCourse';

ReactDOM.render(
    <BrowserRouter>

       <Route path="/" exact component={App}/>
       <Route path="/add" exact component={AddCourse}/>

       <Route path="/details" exact render={
           ()=>{
              return (<h1>This is Course details page</h1>)
            }
        }/>
    </BrowserRouter>, 
    
    document.getElementById('root'));

