import { request } from '../utils/core.utils';



export const getAllUsers = () => {
    
	return request('/users', 'get', null);
};

export const createUser = (formData) => {
	console.log('here create user');
	return request('/createUser', 'post', formData);
};
export const login = (formDa) => {
	return request('/login', 'post', formDa);
};
