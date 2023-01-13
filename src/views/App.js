import logo from './logo.svg'
import './App.scss'
import MyComponent from './Example/MyComponent.js'

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
					Hello World {_name}
				</h2>
				<MyComponent />
			</header>
		</div>
	);
}

export default App;
