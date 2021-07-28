import React from 'react';
import './App.css';

const Notification = (props) => {
  const { title } = props;
  return (
    <div className="notification">
      <h2 className="message__title">{title}</h2>
      <p>{props.children}</p>
    </div>
  );
};
class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: ''
    }
  }

  componentWillMount() {
    console.log("componentWillMount run")
  }

  componentDidMount() {
      console.log("componentDidMount run ")
  }
  onChange(e) {
    this.setState({name: e.target.value});
  }

  render() {
    console.log(" render");
    return (
      <div>
        <label >Dream: </label>
        <input type='text' onChange={this.onChange.bind(this)} />
        <Notification title="Your Dream">{this.state.name}</Notification>
      </div>
    );
  }
}

export default App;
