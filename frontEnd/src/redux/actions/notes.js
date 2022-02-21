import { AddNotes, ListNotes } from '../redux-constants';
import notes from '../../controller/Notes';

export const addNotes = (data) => async dispatch => {
	try {
		console.log('hello addNotes');
		console.log('hello addNotes data ',data);
		dispatch({
			type: AddNotes.ADD_NOTE_REQUEST
		});
		console.log('before addNote');
		await notes.addNote(data);
		console.log('after addNote');
		const respond = notes.getResponse();

		if (respond.success) {
			const { response } = respond;
			console.log('success');
			dispatch({
               
				type: AddNotes.ADD_NOTE_SUCCESS,
				payload: response
			});
		} else {
			console.log('fails');
			const { message } = respond;
			dispatch({
				type: AddNotes.ADD_NOTE_FAIL,
				payload: message
			});
		}
	} catch (error) {
		dispatch({
			type: AddNotes.ADD_NOTE_FAIL,
			payload: error
		});
	}
};

export const notesById = userId => async dispatch => {
	try {
		dispatch({
			type: ListNotes.NOTE_LISTING_REQUEST
		});

		await notes.getNotes(userId);
		const respond = notes.getResponse();
		if (respond) {
			dispatch({
				type: ListNotes.NOTE_LISTING_SUCCESS,
				payload: respond
			});
		} else {
			const { message } = respond;
			dispatch({
				type: ListNotes.NOTE_LISTING_FAIL,
				payload: message
			});
		}
	} catch (error) {
		dispatch({
			type: ListNotes.NOTE_LISTING_FAIL,
			payload: error
		});
	}
};
