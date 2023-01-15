import React from "react";
import "./TodoList.scss"
import { toast } from 'react-toastify';


class TodoList extends React.Component {
	state = {
		id: "",
		hoten: "",
		DataEdit: {},
		arrlistHoten: [
			{ id: 1, hoten: "Hoàng Long" },
			{ id: 2, hoten: "Hoàng Long 1" },
			{ id: 3, hoten: "Hoàng Long 2" }
		]
	}


	handleOnchangeHoten = (event) => {
		this.setState({
			hoten: event.target.value
		})
	}

	handleClickSubmit = () => {
		if (!this.state.hoten) {
			toast.error("Yêu cầu nhập dữ liệu");
			return;
		}
		let obj = {
			id: Math.random(),
			hoten: this.state.hoten
		}
		this.setState({
			arrlistHoten: [...this.state.arrlistHoten, obj]
		})
		toast.success("Thành công!")
		this.setState({
			id: "",
			hoten: ""
		})
	}


	handleClickEdit = (item) => {
		const { arrlistHoten, DataEdit } = this.state;
		let CheckDataEdit = Object.keys(DataEdit).length === 0;
		if (CheckDataEdit === false && DataEdit.id === item.id) {
			let index = arrlistHoten.findIndex(x => x.id === item.id);

			arrlistHoten[index].hoten = DataEdit.hoten;
			this.setState({
				arrlistHoten,
				DataEdit: {}
			})
			toast.success("Thành công!")
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
				hoten: event.target.value      // update the value of specific key
			}
		}))
	}
	handleClickDelete = (item) => {
		let listdata = this.state.arrlistHoten.filter(x => x.id !== item.id)
		this.setState({
			arrlistHoten: listdata
		})
		toast.success("Thành công!")

	}

	render() {
		let { arrlistHoten, DataEdit } = this.state;
		let CheckDataEdit = Object.keys(DataEdit).length === 0;
		return (
			<div className="todolist-container">
				<div className="todolist-add">
					<input value={this.state.hoten} onChange={(event) => this.handleOnchangeHoten(event)} />
					<button onClick={() => this.handleClickSubmit()}>Thêm mới</button>
				</div>
				<div className="todolist-list">
					{arrlistHoten && arrlistHoten.length > 0 &&
						arrlistHoten.map((item, index) => {
							return (
								<div className="item" key={item.id}>
									{item.id}.
									{
										CheckDataEdit === false ?
											item.id === DataEdit.id ?
												<input value={DataEdit.hoten} onChange={(event) => this.handleOnchangeEditHoten(event)} />
												: item.hoten
											: item.hoten
									}
									<></>

									<button onClick={() => this.handleClickEdit(item)}>edit</button>
									<button onClick={() => this.handleClickDelete(item)}>delete</button>
								</div>
							)
						})
					}

				</div >
			</div >
		)
	}
}

export default TodoList;