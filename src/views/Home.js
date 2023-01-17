import React from "react";
// import { withRouter } from "react-router";
import Color from "./HOC/Color";
// import logo from "./assets/images/ycn-media-317794.jpg"
import { connect } from "react-redux";

class Home extends React.Component {

	state = {
		DataEdit: {}
	}

	handleClick = () => {
		this.props.history.push("/about");
	}
	handleClickDelete = (item) => {
		this.props.deleteUser(item);
	}
	handleClickEdit = (item) => {
		const { DataEdit } = this.state;
		let CheckDataEdit = Object.keys(DataEdit).length === 0;
		if (CheckDataEdit === false && DataEdit.id === item.id) {
			this.props.editUser(DataEdit);
			this.setState({
				DataEdit: {}
			})
		} else {
			this.setState({
				DataEdit: item
			})
		}
	}
	handleOnchangeEditHoten = (event) => {
		this.setState(prevState => ({
			DataEdit: {                    // object that we want to update
				...prevState.DataEdit,     // keep all other key-value pairs
				name: event.target.value      // update the value of specific key
			}
		}))
	}
	handleClickAdd = () => {
		let id = Math.random();
		let obj = {
			id: id,
			name: `Random ${id}`
		}
		this.props.addUser(obj);
	}

	render() {
		let listUserData = this.props.dataRedux;
		const { DataEdit } = this.state;
		let CheckDataEdit = Object.keys(DataEdit).length === 0;

		return (
			<div>
				<h2>
					Xin chào trang chủ
				</h2>
				<table>
					<thead>
						<tr>
							<th>STT</th>
							<th>Name</th>
							<th>Xóa</th>
							<th>Sửa</th>
						</tr>
					</thead>
					<tbody>
						{listUserData && listUserData.length > 0 &&
							listUserData.map((item, index) => (
								<tr key={index} >
									<td>{item.id}</td>
									<td>{
										CheckDataEdit === false ?
											item.id === DataEdit.id ?
												<input value={DataEdit.name} onChange={(event) => this.handleOnchangeEditHoten(event)} />
												: item.name
											: item.name
									}</td>
									<td>
										<button type="button" onClick={() => this.handleClickDelete(item)}>
											Xóa
										</button>
									</td>
									<td>
										{CheckDataEdit === false ?
											item.id === DataEdit.id ?
												<button type="button" onClick={() => this.handleClickEdit(item)}>
													Cập nhật
												</button>
												: <button type="button" onClick={() => this.handleClickEdit(item)}>
													Sửa
												</button>
											: <button type="button" onClick={() => this.handleClickEdit(item)}>
												Sửa
											</button>
										}

									</td>
								</tr>
							))
						}
					</tbody>
				</table>
				{/* <img alt="" src={logo} /> */}
				<button type="button" onClick={() => this.handleClickAdd()}>
					Thêm
				</button>

				<button type="button" onClick={this.handleClick}>
					Go About
				</button>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		dataRedux: state.users
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		deleteUser: (users) => dispatch({ type: 'Delete_Type', payload: users }),
		addUser: (users) => dispatch({ type: 'Add_Type', payload: users }),
		editUser: (users) => dispatch({ type: 'Edit_Type', payload: users })
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Color(Home));