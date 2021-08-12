import React, { Component } from 'react'

export default class stateDemo3 extends Component {
	state = {
		count: 0
	}

	static getDerivedStateFromProps(props, state) {
		console.info('getDerivedStateFromProps', state.count) // getDerivedStateFromProps 1
		return { ...state }
	}

	shouldComponentUpdate() {
		console.info('shouldComponentUpdate', this.state.count) // shouldComponentUpdate 0
		return true
	}

	increase = () => {
		this.setState({
			count: this.state.count + 1
		})
	}

	render() {
		console.info('render', this.state.count) //render 1
		return (
			<div>
				<p>{this.state.count}</p>
				<button onClick={this.increase}>累加</button>
			</div>
		)
	}

	getSnapshotBeforeUpdate() {
		console.info('getSnapshotBeforeUpdate', this.state.count) //getSnapshotBeforeUpdate 1
		return null
	}

	componentDidUpdate() {
		console.info('componentDidUpdate', this.state.count) //componentDidUpdate 1
	}
}
