import React, { Component } from 'react';
import config from '../config';
class Stats extends Component {
	constructor(props) {
		super(props);
		this.state = {
			total: 0,
			done: 0,
			project: this.props.project
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
	componentDidUpdate(oldProp) {
		if (oldProp !== this.props) {
			this.setState({ project: this.props.project });
			fetch(`${config.backend}/tasks`, { method: 'GET' })
				.then(res => res.json())
				.then(json => {
					console.log(this.state.project)
					this.setState({ total: json[this.state.project].length });
					var done = 0;
					for (var i = 0; i < json[this.state.project].length; i++) {
						if (json[this.state.project][i].isDone) {
							done++;
						}
					}
					this.setState({ done: done });
				});
		}

	}
}


export default Stats;
