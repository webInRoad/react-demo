import { Component } from 'react'

export class stateDemo extends Component {
	state = {
		count: 0
	}
	componentDidMount() {
		this.setState({ count: this.state.count + 1 })
		console.log(this.state.count)
		this.setState({ count: this.state.count + 1 })
		console.log(this.state.count)
		setTimeout(() => {
			this.setState({ count: this.state.count + 1 })
			console.log(this.state.count)
			this.setState({ count: this.state.count + 1 })
			console.log(this.state.count)
		}, 0)
	}

	render() {
		return null
	}
}

export default stateDemo
