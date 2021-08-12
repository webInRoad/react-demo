import React, { Component } from 'react'

export default class stateDemo8 extends Component {
  state = {
    count:0
  }
  componentDidMount() {
    document.querySelector("#change").addEventListener("click", () => {
      this.setState({
        count: this.state.count + 1,
      });
      console.log("update count1:", this.state.count);
    });
  }
  handleChangeCount = () => {
      setTimeout(() => {
        this.setState({
          count: this.state.count + 1,
        });
        console.log("update count2:", this.state.count);
      }, 0);
  }
  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button id="change">更改1</button>
        <button onClick={this.handleChangeCount}>更改2</button>
      </div>
    )
  }
}
