import { request } from '../utils/core.utils';



export const getAllUsers = () => {
    
    return request('/users', 'get', null);
}

export const createUser = (formData) => {
    console.log('here create user');
    return request('/createUser', 'post', formData);
}
export const login = (formData) => {
    return request('/login', 'post', formData);
}
