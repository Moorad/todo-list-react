import React, { Component } from "react";
import tick from "../images/tick.png";
class TodoBox extends Component {
	constructor(props) {
		super(props);
		this.state = this.props.data;
		this.handleClick = this.handleClick.bind(this);
	}

	render() {
		return (
			<div className="todo-container">
				<p className="todo-name">{this.props.data.title}</p>
				<div className="checkbox" onClick={this.handleClick}>
					<img
						alt="Tick"
						src={tick}
						style={{
							display: this.state.isDone ? "block" : "none"
						}}
					/>
				</div>
			</div>
		);
	}

	handleClick() {
		this.setState({ isDone: !this.state.isDone });
	}
}

export default TodoBox;
