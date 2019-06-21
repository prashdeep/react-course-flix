import React from 'react';
import './App.css';
import Courses from './components/Courses';

const courses=[
  'React',
  'Angular',
  'Java 8',
  'Spring',
  'Hibernate'
]

function App() {
  return (
      <div>
         <Courses data={courses}/>
      </div>
  );
}

export default App;
