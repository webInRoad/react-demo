import React, { Component } from 'react'

export default class stateDemo5 extends Component {
  state = {
    count:0
  }

  componentDidMount() {
    this.setState({
      count:this.state.count+1
    })
    console.info("didMount count:",this.state.count) // didMount count: 0
  }
  handleChangeCount = () => {
    this.setState({
      count:this.state.count+1
    })
    console.info("update count:",this.state.count) // update count: 1
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
