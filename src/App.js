import React from 'react';
import './App.css';
import Clock from './component/Clock';

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
      name: '',
      isToggleOn: true
    }
    this.handleClick = this.handleClick.bind(this);
  }

  static getDerivedStateFromProps() {
    console.log("getDerivedStateFromProps run")
    return null;
  }

  componentDidMount() {
      console.log("componentDidMount run ")
  }
  onChange(e) {
    this.setState({name: e.target.value});
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    console.log(" render");
    return (
      <div>
        <label >Dream: </label>
        <input type='text' onChange={this.onChange.bind(this)} />
        <Notification title="Your Dream">{this.state.name}</Notification>
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'TURN OFF CLOCK' : 'TURN ON CLOCK'}
        </button>
        {this.state.isToggleOn ? <Clock /> : ''}
        
      </div>
    );
  }
}

export default App;
