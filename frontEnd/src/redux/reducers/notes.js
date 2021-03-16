import { AddNotes, ListNotes } from '../redux-constants';

export const addNotesReducer = (state = {}, action) => {
    switch (action.type) {
    case AddNotes.ADD_NOTE_REQUEST:
        return { loading: true, isSuccess: false };
    case AddNotes.ADD_NOTE_SUCCESS:
        return { loading: false, notes: action.payload, isSuccess: true };
    case AddNotes.ADD_NOTE_FAIL:
        return { loading: false, error: action.payload, isSuccess: false };
    default:
        return state;
    }
};

export const listNotesReducer = (state = { notes: [] }, action) => {
    switch (action.type) {
    case ListNotes.NOTE_LISTING_REQUEST:
        return { loading: true, isSuccess: false };
    case ListNotes.NOTE_LISTING_SUCCESS:
        return { loading: false, notes: action.payload, isSuccess: true };
    case ListNotes.NOTE_LISTING_FAIL:
        return { loading: false, error: action.payload, isSuccess: false };
    default:
        return state;
    }
};
