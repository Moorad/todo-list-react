import React, { Component } from 'react';
import config from '../config';
class Stats extends Component {
	constructor() {
		super();
		this.state = {
			total: 0,
			done: 0
		};
	}

	render() {
		return (
			<div className="stats-container">
				<h2 className="sub-title">Progress</h2>
				<div className="progress-container">
					<div
						className="progress-bar"
						style={{
							width:
								(this.state.done / this.state.total) * 100 + '%'
						}}
					/>
				</div>
			</div>
		);
	}

	componentDidMount() {
		fetch(`${config.backend}/tasks`, { method: 'GET' })
			.then(res => res.json())
			.then(json => {
				this.setState({ total: json.todo.length });
				var done = 0;
				for (var i = 0; i < json.todo.length; i++) {
					if (json.todo[i].isDone) {
						done++;
					}
				}
				this.setState({ done: done });
			});
	}
}

export default Stats;
