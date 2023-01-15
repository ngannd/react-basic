import React from "react";

class ChildComponent extends React.Component {
	state = {
		isShow: false
	};
	handleOnclickShow = (event) => {
		event.preventDefault();
		this.setState({
			isShow: !this.state.isShow
		})
	}
	render() {
		let { name, age, arrJobs } = this.props;
		return (
			<div>
				{this.state.isShow === true ?
					<div className="array-list12">
						<h2>ChildComponent Tên : {name} - {age}</h2>
						{
							arrJobs.map((item, index) => {
								return (
									<div className="array-list" key={item.id}>
										title: {item.title} - salary:{item.salary}
									</div>
								)
							}
							)
						}
						<button onClick={(event) => this.handleOnclickShow(event)}>Hide</button>
					</div> : <button onClick={(event) => this.handleOnclickShow(event)}>Show</button>
				}

			</div>
		)
	}
}

// const ChildComponent = (props) => {
// 	let { name, age, arrJobs } = props
// 	let isShow = false;
// 	handleOnclickShow = () => {

// 	}
// 	return (
// 		<div>
// 			<h2>ChildComponent Tên : {name} - {age}</h2>
// 			{isShow === true ?

// 				arrJobs.map((item, index) => {
// 					return (
// 						<div className="array-list" key={item.id}>
// 							title1: {item.title} - salary:{item.salary}
// 						</div>
// 					)
// 				}
// 				)
// 				: ""
// 			}

// 			<button onClick={() => this.handleOnclickShow()}>Show</button>
// 			<button onClick={() => this.handleOnclickShow()}>Hide</button>


// 		</div>
// 	)
// }



export default ChildComponent