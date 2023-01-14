import React from "react";
class AddComponent extends React.Component {
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
		if (!this.state.firstName || !this.state.lastName) {
			alert("Yêu cầu nhập dữ liệu");
			return;
		}

		this.props.addnewJobs({
			id: Math.random(),
			Title: this.state.firstName,
			Salary: this.state.lastName
		});
		this.setState({
			firstName: "",
			lastName: ""
		})
		// alert("Click me " + this.state.lastName + ' ' + this.state.firstName);
	}

	render() {
		let { name } = this.props
		return (
			<div>
				<form >
					<label htmlFor="fname">First name: </label><br />
					<input type="text" id="fname" name="fname" value={this.state.firstName} onChange={(event) => this.handleOnchangeFirstName(event)} /><br />
					<label htmlFor="lname">Last name:</label><br />
					<input type="text" id="lname" name="lname" value={this.state.lastName} onChange={(event) => this.handleOnchangeLastName(event)} /><br /><br />
					<input type="submit" value="Submit" onClick={(event) => this.handleSubmit(event)} />

				</form>
				<div>{name}</div>
			</div>
		)
	}
}
export default AddComponent