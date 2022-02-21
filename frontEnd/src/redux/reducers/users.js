import {ListUsers, AddUsers, LoginUSER} from '../redux-constants';

export const listUsersReducer = (state = { users: [] }, action) => {
	switch (action.type) {
	case ListUsers.LIST_USERS_REQUEST:
		return { loading: true, isSuccess: false };
	case ListUsers.LIST_USERS_SUCCESS:
		return { loading: false, users: action.payload, isSuccess: true };
	case ListUsers.LIST_USERS_FAIL:
		return { loading: false, error: action.payload, isSuccess: false };
	default:
		return state;
	}
};

export const loginUsersReducer = (state = { use: [] }, action) => {
	switch (action.type) {
	case LoginUSER.LOG_USER_REQUEST:
		return { loading: true, isSuccess: false };
	case LoginUSER.LOG_USER__SUCCESS:
		return { loading: false, users: action.payload, isSuccess: true };
	case LoginUSER.LOG_USER__FAIL:
		return { loading: false, error: action.payload, isSuccess: false };
	default:
		return state;
	}
};

export const addUserReducer = (state = {}, action) => {
	switch (action.type) {
	case AddUsers.ADD_USERS_REQUEST:
		return { loading: true, isSuccess: false };
	case AddUsers.ADD_USERS_SUCCESS:
		return { loading: false, notes: action.payload, isSuccess: true };
	case AddUsers.ADD_USERS_FAIL:
		return { loading: false, error: action.payload, isSuccess: false };
	default:
		return state;
	}
};