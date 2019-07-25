import React, { Component } from 'react';

class Title extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="title-container">
				<input
					type="text"
					className="title"
					defaultValue={this.props.project}
				/>
			</div>
		);
	}
}

export default Title;
