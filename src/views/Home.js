import React from "react";
// import { withRouter } from "react-router";
import Color from "./HOC/Color";

class Home extends React.Component {
	handleClick = () => {
		this.props.history.push("/about");
	}

	render() {
		return (
			<div>
				<h2>
					Xin chào trang chủ
				</h2>
				<button type="button" onClick={this.handleClick}>
					Go About
				</button>
			</div>
		)
	}
}
export default Color(Home);