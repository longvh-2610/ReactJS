import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Example from'./Example';

const student = {
  name: 'Hoang Long',
  school: 'VIEN DONG',
  majors: 'IT'
  
};

const element = (
  <div className="App">
    <h1>WELCOME</h1>
    <Example student={student}/>
    <p> TIME : {new Date().toLocaleTimeString().replace(/:\d+ /, ' ')}.</p>
    
  </div>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);