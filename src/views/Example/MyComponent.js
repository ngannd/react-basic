import React from "react";
import ChildComponent from "./ChildComponent";

class MyComponent extends React.Component {
	state = {
		firstName: "",
		lastName: ""
	}
	handleOnchangeFirstName = (event) => {
		this.setState({
			firstName: event.target.value
		})
	}
	handleOnchangeLastName = (event) => {
		this.setState({
			lastName: event.target.value
		})
	}
	handleSubmit = (event) => {
		event.preventDefault();
		alert("Click me " + this.state.lastName + ' ' + this.state.firstName);
	}



	render() {
		return (
			<div>
				<form >
					<label htmlFor="fname">First name: </label><br />
					<input type="text" id="fname" name="fname" value={this.state.firstName} onChange={(event) => this.handleOnchangeFirstName(event)} /><br />
					<label htmlFor="lname">Last name:</label><br />
					<input type="text" id="lname" name="lname" value={this.state.lastName} onChange={(event) => this.handleOnchangeLastName(event)} /><br /><br />
					<input type="submit" value="Submit" onClick={(event) => this.handleSubmit(event)} />
					<ChildComponent
						name={this.state.firstName}
						age={'25'}
					/>
				</form>

			</div>
		)
	}
}



export default MyComponent