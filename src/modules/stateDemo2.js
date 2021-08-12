import React, { Component } from 'react'

export default class stateDemo2 extends Component {
	state = {
		count: 0
	}

	shouldComponentUpdate() {
		console.info('shouldComponentUpdate', this.state.count)
		return true
	}

	componentWillUpdate() {
		console.info('componentWillUpdate', this.state.count)
	}

	increase = () => {
		this.setState({
			count: this.state.count + 1
		})
	}

	render() {
		console.info('render', this.state.count)
		return (
			<div>
				<p>{this.state.count}</p>
				<button onClick={this.increase}>累加</button>
			</div>
		)
	}
	
	componentDidUpdate() {
		console.info('componentDidUpdate', this.state.count)
	}
}
