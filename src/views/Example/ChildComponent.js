import React from "react";
import "./Demo.scss"


class ChildComponent extends React.Component {
	state = {
		isShow: false
	}
	handleOnclick = (event) => {
		event.preventDefault();
		this.setState({
			isShow: !this.state.isShow
		});
	}
	handleClickDelete = (item) => {
		this.props.deleteData(item)
	}

	render() {
		//console.log(this.props)
		let { name, age, arrJobs } = this.props;
		let button;
		if (this.state.isShow === true) {
			button = <div className="list-items">
				{
					arrJobs.map((item, index) => {
						return (
							<div className="item" key={item.id}>
								Tên : {item.Title} <></> <span onClick={() => this.handleClickDelete(item)}>x</span>
							</div>
						)
					})
				}
				<button onClick={(event) => this.handleOnclick(event)}>Hide</button>
			</div>
		} else {
			button = <button className="button-show" onClick={(event) => this.handleOnclick(event)}>Show</button>
		}
		return (
			<div>
				<h2>Tên : {name} - tuổi : {age}</h2>
				{button}
			</div>
		)
	}
}

export default ChildComponent