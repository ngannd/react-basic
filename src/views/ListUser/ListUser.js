import React from "react";
import './ListUser.scss'
import axios from 'axios';
import { withRouter } from "react-router-dom";

class ListUser extends React.Component {

	state = {
		listUserData: []
	}
	async componentDidMount() {
		try {
			const rs = await axios.get('https://reqres.in/api/users?page=1');
			this.setState({
				listUserData: rs && rs.data && rs.data.data && rs.data.data.length > 0 ? rs.data.data : []
			})

		} catch (error) {
			console.error(error);
		}
	}
	handleClickDetail = (user) => {
		this.props.history.push(`/user/${user.id}`);
	}

	render() {
		let { listUserData } = this.state;
		return (
			<div>
				<h2>Danh sách ListUser</h2>
				<table>
					<thead>
						<tr>
							<th>STT</th>
							<th>Contact</th>
							<th>Country</th>
						</tr>
					</thead>
					<tbody>
						{listUserData && listUserData.length > 0 &&
							listUserData.map((item, index) => (
								<tr key={index} onClick={() => this.handleClickDetail(item)}>
									<td>{item.id}</td>
									<td>{item.first_name}</td>
									<td>{item.last_name}</td>
								</tr>
							))
						}
					</tbody>
				</table>
			</div>

		)
	}
}
export default withRouter(ListUser);