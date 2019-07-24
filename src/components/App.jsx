import React, { Component } from 'react';
import TodoBox from './todoBox';
import Input from './Input';
import Title from './Title';
import Stats from './Stats';
import '../styles/main.css';
import config from '../config';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todo: null
		};
	}
	render() {
		return (
			<div>
				<div className="container">
					<Title something="My List" />
					<Input />
					<div className="all-todos-container">{this.state.todo}</div>
				</div>
				<div className="section-container">
					<Stats />
				</div>
			</div>
		);
	}

	componentDidMount() {
		fetch(config.backend + '/tasks', {
			method: 'GET'
		})
			.then(res => res.json())
			.then(json => {
				this.setState({
					todo: json.todo.map(x => {
						return <TodoBox data={x} key={x.id} />;
					})
				});
			});
	}
}

export default App;
