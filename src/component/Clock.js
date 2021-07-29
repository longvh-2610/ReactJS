import React from 'react'

class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
      this.handleClick = this.handleClick.bind(this);
    }
    
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
    
    handleClick() {
        this.setState(prevState => ({
          isToggleOn: !prevState.isToggleOn
        }));
      }
    
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {
      this.setState({
        date: new Date()
      });
    }
  
    render() {
      return (
        <div>
          <h2>Clock : {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }
export default Clock;