import './Contact.css';
import React from "react";

class Counter extends React.Component {
  state = { count: 0 }

  OnIncrement = () => {
    const { count } = this.state;

    if (count < 10) {
      this.setState((prevState) => ({ count: prevState.count + 1 }));
    } else {
      alert("Cannot increase more than 10");
    }
  }

  OnDecrement = () => {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  }

  OnButton = () => {
    this.setState({ count: 0 });
  }

  render() {
    const { count } = this.state;

    return (
      <>
        <h1>Count is {count}</h1>
        <button className="button" onClick={this.OnIncrement}>Increase</button>
        <button className="button" onClick={this.OnDecrement}>Decrease</button>
        <button className="button" onClick={this.OnButton}>Reset</button>
      </>
    )
  }
}

export default Counter;
