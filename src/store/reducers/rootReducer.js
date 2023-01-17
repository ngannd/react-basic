const initState = {
	users: [
		{ id: 1, name: 'Eric' },
		{ id: 2, name: 'Hoi dan IT' },
		{ id: 3, name: 'Hoi dan 555' }
	]
}

const rootReducer = (state = initState, action) => {
	switch (action.type) {
		case "Delete_Type":
			let DataUser = state.users;
			let lstDataUser = DataUser.filter(x => x.id !== action.payload.id)
			return {
				...state, users: lstDataUser
			}
		case "Add_Type":
			return {
				...state, users: [...state.users, action.payload]
			}
		case "Edit_Type":
			let lstData = state.users;
			let index = lstData.findIndex(x => x.id === action.payload.id);

			lstData[index].name = action.payload.name;
			return {
				...state, users: lstData
			}

		default: return state
	}

}
export default rootReducer;