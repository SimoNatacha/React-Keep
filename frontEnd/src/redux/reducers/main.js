import {listUsersReducer,addUserReducer,loginUsersReducer} from './users';
import { combineReducers } from 'redux';
import { addNotesReducer, listNotesReducer } from './notes';
const rootReducer =combineReducers({
	listUsers: listUsersReducer,
	addNotes: addNotesReducer,
	addUsers: addUserReducer,
	LoginU:loginUsersReducer,
	listNotes: listNotesReducer,
});

export default rootReducer;