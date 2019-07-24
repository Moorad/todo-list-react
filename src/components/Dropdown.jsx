import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
class Dropdown extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	render() {
		return (
			<div style={this.props.style} className="dropdown-container">
				<div className="arrow" />
				<div
					className="dropdown-option"
					onClick={this.handleClick.bind(this, 'delete')}
				>
					<FontAwesomeIcon icon={faTrash} /> Delete
				</div>
			</div>
		);
	}

	handleClick(option) {
		if (option == 'delete') {
			this.props.onDelete();
		}
	}
}

export default Dropdown;
