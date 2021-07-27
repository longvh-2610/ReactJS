// class component
// import React from 'react';
// class Example extends React.Component {
//     render() {
//       return <h1>Hello, {this.props.student.name}</h1>;
//     }
// }
//funcition component
function Example(props) {
    return (
        <>
        <p>Student: {props.student.name}  majors: {props.student.majors} from: {props.student.school}</p>
        <p>{props.text}</p>
        </>
    );
}
Example.defaultProps = {
    text: "hello world",
  };

export default Example;