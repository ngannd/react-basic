import logo from './logo.svg'
import './App.scss'
import TodoList from './TodoList/TodoList.js'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// class components
// funtion components

const user = {
	login: 'ngannd',
	name: 'Nguyễn Đắc Ngàn'
}
const userFormat = (data) => {
	return data.name + ' - ' + data.login
}
const _name = (<div>{userFormat(user)}</div>);

const App = () => {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<h2>
					TodoList - Hello World -{_name}
				</h2>
				<TodoList />
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
	);
}

export default App;
