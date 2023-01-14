import React from "react";
import "./TodoList.scss"
import { toast } from 'react-toastify';


class TodoList extends React.Component {
	state = {
		id: "",
		hoten: "",
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
		toast.success("Wow so easy!")
		this.setState({
			id: "",
			hoten: ""
		})
	}
	handleClickAdd = () => {
		this.setState({
			id: "",
			hoten: ""
		})
	}

	handleClickEdit = (item) => {
		this.setState({
			id: item.id,
			hoten: item.hoten
		})
	}
	handleClickDelete = (item) => {
		let listdata = this.state.arrlistHoten.filter(x => x.id !== item.id)
		this.setState({
			arrlistHoten: listdata
		})
		toast.success("Wow so easy!")

	}





	render() {
		let { arrlistHoten } = this.state;
		return (
			<div className="todolist-container">
				<div className="todolist-add">
					<input value={this.state.hoten} onChange={(event) => this.handleOnchangeHoten(event)} />
					<button onClick={() => this.handleClickSubmit()}>Cập nhật</button>
					<button onClick={() => this.handleClickAdd()}>Thêm mới</button>
				</div>
				<div className="todolist-list">
					{arrlistHoten && arrlistHoten.length > 0 &&
						arrlistHoten.map((item, index) => {
							return (
								<div className="item" key={item.id}>
									{item.id}. {item.hoten} <></>
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