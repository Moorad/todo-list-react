import React, { Component } from 'react'
import config from '../config';
class Projects extends Component {
	constructor(props) {
		super(props);
		this.state = {
			projects: []
		};
	}

	render() {
		return (
			<div className='projects-container'>
				{this.state.projects}
			</div>
		);
	}

	componentDidMount() {
		fetch(`${config.backend}/tasks`, {
			method: 'GET'
		}).then(res => res.json())
			.then(json => {
				this.setState({ projects: Object.keys(json).map((x) => { return (<div className='project'>{x}</div>) }) })
			});
	}
	
}

export default Projects;