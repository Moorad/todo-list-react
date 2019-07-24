import React, { Component } from 'react';
import Dropdown from './Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faCog } from '@fortawesome/free-solid-svg-icons';
import config from '../config';

class TodoBox extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: this.props.data,
			isDropdownVisible: false
		};
		this.handleClick = this.handleClick.bind(this);
		this.handleDropdown = this.handleDropdown.bind(this);
	}

	render() {
		return (
			<div className="todo-container">
				<p
					className="todo-name"
					style={{
						textDecoration: this.state.data.isDone
							? 'line-through'
							: 'none'
					}}
				>
					{this.props.data.title}
				</p>
				<div
					className="settings-container"
					onClick={this.handleDropdown}
				>
					<Dropdown
						style={{
							display: this.state.isDropdownVisible
								? 'block'
								: 'none'
						}}
						onDelete={this.handleDeletion.bind(
							this,
							this.state.data.id
						)}
					/>
					<FontAwesomeIcon icon={faCog} />
				</div>
				<div className="checkbox" onClick={this.handleClick}>
					<FontAwesomeIcon
						icon={faCheck}
						style={{
							display: this.state.data.isDone ? 'block' : 'none'
						}}
						className="tick"
						size="lg"
					/>
				</div>
			</div>
		);
	}

	sendModifed() {
		fetch(
			`${config.backend}/modify?data=${JSON.stringify(this.state.data)}`,
			{
				method: 'GET'
			}
		);
	}

	handleClick() {
		console.log(this.state);
		var modified = this.state.data;
		modified.isDone = !this.state.data.isDone;
		this.setState({ data: modified }, err => {
			if (err) console.log(err);
			this.sendModifed();
		});
	}

	handleDropdown() {
		this.setState({ isDropdownVisible: !this.state.isDropdownVisible });
	}

	handleDeletion() {
		var id = this.state.data.id;
		console.log('triggered');
		fetch(`${config.backend}/tasks`, {
			method: 'GET'
		})
			.then(res => res.json())
			.then(json => {
				for (var i = 0; i < json.todo.length; i++) {
					if (id == json.todo[i].id) {
						var modified = json.todo;
						modified.splice(i, 1);
						console.log(modified);
						fetch(
							`${config.backend}/modify?data=${JSON.stringify(
								modified
							)}&full=true`,
							{ method: 'GET' }
						);
						window.location.reload();
						break;
					}
				}
			});
	}
}

export default TodoBox;
