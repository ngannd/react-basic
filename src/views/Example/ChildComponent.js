import React from "react";

class ChildComponent extends React.Component {
	render() {
		console.log(this.props)
		let { name, age } = this.props;
		return (
			<div>
				<h2>Tên : {name}</h2>
				<h2>Age : {age}</h2>
			</div>
		)
	}
}



export default ChildComponent