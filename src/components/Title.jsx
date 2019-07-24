import React, { Component } from 'react';

class Title extends Component {
	render() {
		return (
			<div className="title-container">
				<input
					type="text"
					className="title"
					defaultValue={this.props.something}
				/>
			</div>
		);
	}
}

export default Title;
