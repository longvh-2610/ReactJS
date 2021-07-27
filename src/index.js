import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
function format(student) {
  return 'Student: ' + student.name + ' majors: ' + student.majors +' from: '+ student.school;
}

const student = {
  name: 'Hoang Long',
  school: 'VIEN DONG',
  majors: 'IT'
  
};

const element = (
  <div className="App">
    <h1>WELCOME</h1>
    <p>
     {format(student)}
    </p>
    <p> TIME : {new Date().toLocaleTimeString().replace(/:\d+ /, ' ')}.</p>
  </div>
);

ReactDOM.render(
  element,
  document.getElementById('root')
);