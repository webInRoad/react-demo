import React, { Component } from 'react'

export default class stateDemo6 extends Component {
  state = {
    count:0
  }
  handleChangeCount = () => {
    this.setState({
      count:this.state.count+1
    },() => {
      console.info("update count:",this.state.count)
    })
    this.setState({
      count:this.state.count+1
    },() => {
      console.info("update count:",this.state.count)
    })
    this.setState({
      count:this.state.count+1
    },() => {
      console.info("update count:",this.state.count)
    })
  }

  render() {
    return (
      <div>
        {this.state.count}
        <button onClick={this.handleChangeCount}>更改</button>
      </div>
    )
  }
}
