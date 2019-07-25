import React, { Component } from 'react';
import TodoBox from './todoBox';
import Input from './Input';
import Title from './Title';
import Stats from './Stats';
import Projects from './Projects';
import '../styles/main.css';
import config from '../config';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todos: null,
			currentProject: ''
		};
	}
	render() {
		return (
			<div>
				<div className="container" style={{ width: window.innerWidth < 800 ? '100%' : '75%' }}>
					<Title project={this.state.currentProject} />
					<Input project={this.state.currentProject} />
					<div className="all-todos-container">{this.state.todos}</div>
				</div>
				{window.innerWidth > 800 ? <div className="section-container">
					<Stats project={this.state.currentProject} />
					<Projects projects={this.state.allProject} />
				</div> : <div>Unavailable</div>/*<HamburgerMenu/>*/}
			</div>
		);
	}

	componentDidMount() {
		fetch(config.backend + '/tasks', {
			method: 'GET'
		})
			.then(res => res.json())
			.then(json => {
				var keys = Object.keys(json);

				this.setState({
					currentProject: keys[0],
					todos: json[keys[0]].map(x => {
						return <TodoBox data={x} key={x.id} />;
					})
				});
			});
	}
}

export default App;
