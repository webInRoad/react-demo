import React, { Component } from 'react'

export default class stateDemo4 extends Component {
	state = {
		person: {
			name: 'zhangsan',
			age: 20
		},
		hobbys: ['running', 'read']
	}

	handleChangePerson = () => {
		this.setState({
			// person: Object.assign({}, this.state.person, { name: 'lisi' })
			person: { ...this.state.person, age: 22 }
		})
	}
	handleAddHobbys = () => {
		this.setState((prevState) => {
			return {
				// hobbys: prevState.hobbys.concat('writing')
        hobbys:[...prevState.hobbys,'writing']
			}
		})
	}

	handleSpliceHobbys = () => {
		this.setState((prevState) => {
      let currentState = prevState.hobbys.slice() // 先克隆一份
      currentState.splice(1, 0, 'basketball')
			return {
				hobbys: currentState
			}
		})
	}
	handleSliceHobbys = () => {
		this.setState({
			hobbys: this.state.hobbys.slice(0, 2)
		})
	}

	handleFilterHobbys = () => {
		this.setState({
			hobbys: this.state.hobbys.filter((item) => item.length < 5)
		})
	}
	render() {
		const { person, hobbys } = this.state
		return (
			<div>
				<p>对象：{JSON.stringify(person)}</p>
				<button onClick={this.handleChangePerson}>更改对象</button>
				<p>数组：{JSON.stringify(hobbys)}</p>
				<button onClick={this.handleAddHobbys}>数组添加</button>
				<button onClick={this.handleSliceHobbys}>数组截取</button>
				<button onClick={this.handleSpliceHobbys}>数组插入</button>
				<button onClick={this.handleFilterHobbys}>数组过滤</button>
			</div>
		)
	}
}
