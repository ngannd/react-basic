import React from "react";
import axios from 'axios';
import { withRouter } from "react-router-dom";

class DetailUser extends React.Component {

	state = {
		DetailData: {}
	}
	async componentDidMount() {
		try {
			let id = this.props.match.params.id;
			const rs = await axios.get(`https://reqres.in/api/users/${id}`);
			console.log("Dữ liệu DetailData: ", rs.data.data);
			this.setState({
				DetailData: rs && rs.data && rs.data.data ? rs.data.data : {}
			})


		} catch (error) {
			console.error(error);
		}
	}

	handleClickBack = () => {
		this.props.history.push("/user");
	}


	render() {
		let { DetailData } = this.state;
		let user = Object.keys(DetailData).length === 0;
		return (
			<div>
				<h2>Danh sách Detail </h2>
				{user === false &&
					<>
						<div>
							{DetailData.id} - {DetailData.first_name} - {DetailData.last_name}
						</div>
						<div>
							<img alt="" src={DetailData.avatar} />
						</div>
					</>
				}
				<button onClick={() => { this.handleClickBack() }}>Back</button>
			</div>

		)
	}
}
export default withRouter(DetailUser);