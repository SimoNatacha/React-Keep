import { request } from '../utils/core.utils';



export const getAllNotes = id => {
	return request(`notes/${id}`, 'get', null);
};

export const createNote = (data)=> {
	console.log('createnote',request(`${sessionStorage.getItem('user_id')}/notes/createNote`, 'post', data));
	return request(`notes/${sessionStorage.getItem('user_id')}/createNote`, 'post', data);
};
