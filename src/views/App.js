import './App.scss'
import logo from './logo.svg'
import TodoList from './TodoList/TodoList.js'
import Mycomponent from './Example/MyComponent'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from './Nav/Nav';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './Home';
import ListUser from './ListUser/ListUser';
import DetailUser from './ListUser/DetailUser';
// const user = {
// 	login: 'ngannd',
// 	name: 'Nguyễn Đắc Ngàn'
// }
// const userFormat = (data) => {
// 	return data.name + ' - ' + data.login
// }
// const _name = (<div>{userFormat(user)}</div>);

const App = () => {
	return (
		<BrowserRouter>
			<div className="App">
				<header className="App-header">
					<Nav />
					<img src={logo} className="App-logo" alt="logo" />

					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route path="/Todos">
							<TodoList />
						</Route>
						<Route path="/about">
							<Mycomponent />
						</Route>
						<Route path="/user" exact>
							<ListUser />
						</Route>
						<Route path="/user/:id">
							<DetailUser />
						</Route>
					</Switch>
				</header>
				<ToastContainer
					position="top-right"
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
					theme="light"
				/>
				{/* Same as */}
				<ToastContainer />
			</div>
		</BrowserRouter>
	);
}

export default App;
