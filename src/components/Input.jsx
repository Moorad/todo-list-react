import React, { Component } from 'react';

var server = 'http://localhost:4000';

class Input extends Component {
	constructor(props) {
		super(props);
		this.textInput = React.createRef();
		this.state = {
			isHidden: true
		};
		this.handleClick = this.handleClick.bind(this);
	}

	render() {
		return (
			<div>
				<div>
					<form>
						<button className="add" onClick={this.handleClick}>
							+
						</button>
					</form>
				</div>
				<div
					className="popup"
					style={{ top: this.state.isHidden ? '-100%' : '0' }}
				>
					<button className="close" onClick={this.handleClick}>
						×
					</button>
					<h2>Add New Todo</h2>
					<form onSubmit={this.handleSubmit}>
						<input type="text" ref={this.textInput} />
						<button>Add</button>
					</form>
				</div>
			</div>
		);
	}

	handleClick(e) {
		e.preventDefault();
		this.setState({ isHidden: !this.state.isHidden });
	}

	handleSubmit = e => {
		e.preventDefault();
		var data = this.textInput.current.value;
		fetch(`${server}/insert?data=${data}&pjct=${this.props.project}`, {
			method: 'GET'
		});
		this.setState({ isHidden: !this.state.isHidden });
		window.location.reload();
	};
}

export default Input;
