import React, { Component } from 'react'

export default class stateDemo7 extends Component {
  state = {
    count:0
  }
  handleChangeCount = () => {
    this.setState(prevState => {
      return {
        count:prevState.count+1
      }
    },() => {
      console.info("update count:",this.state.count)
    })
    this.setState(prevState => {
      return {
        count:prevState.count+1 
      }
    },() => {
      console.info("update count:",this.state.count)
    })
    this.setState(prevState => {
      return {
        count:prevState.count+1 
      }
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
