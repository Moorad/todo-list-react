import React, { Component } from "react";
import TodoBox from "./todoBox";
import Input from "./Input";
import Title from "./Title";
import "../styles/main.css";

var url = "http://localhost:4000";
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			todo: null
		};
	}
	render() {
		return (
			<div className="container">
				<Title something="My List" />
				<Input />
				<div className="all-todos-container">{this.state.todo}</div>
			</div>
		);
	}

	componentDidMount() {
		fetch(url + "/tasks", {
			method: "GET"
		})
			.then(res => res.json())
			.then(json => {
				console.log(json);
				this.setState({
					todo: json.todo.map(x => {
						return <TodoBox data={x} key={x.id} />;
					})
				});
				console.log(this.state.todo);
			});
	}
}

export default App;
