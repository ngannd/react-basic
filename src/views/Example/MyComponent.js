import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {
	state = {
		name: '12',
		arrJobs: [
			{
				id: 1, Title: "ABC", Salary: "200"
			},
			{
				id: 2, Title: "ABC1", Salary: "500"
			},
			{
				id: 3, Title: "ABC2", Salary: "700"
			}
		]
	}
	addnewJobs = (data) => {
		//console.log("Check data submit" + data);
		this.setState({
			arrJobs: [...this.state.arrJobs, data]
		})
	}
	deleteData = (item) => {
		let data = this.state.arrJobs.filter(x => x.id !== item.id);
		this.setState({
			arrJobs: data
		})
	}

	componentDidMount() {
		console.log("run componentDidMount");
	}

	componentDidUpdate(prevProps, prevState) {
		console.log("run componentDidUpdate", 'dữ liệu cũ State : ', prevState, 'dữ liệu mới State : ', this.state);
	}

	render() {
		return (
			<div>
				<AddComponent
					name={'ngannd'}
					age={'25'}
					addnewJobs={this.addnewJobs}
				/>
				<ChildComponent
					arrJobs={this.state.arrJobs}
					deleteData={this.deleteData}
				/>
			</div>
		)
	}
}



export default MyComponent