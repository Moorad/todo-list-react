import React, { Component } from "react";

class Title extends Component {
	render() {
		console.log(this.props);
		return (
			<input
				type="text"
				className="title"
				defaultValue={this.props.something}
			/>
		);
	}
}

export default Title;
