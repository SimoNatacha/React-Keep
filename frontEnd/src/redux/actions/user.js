import {ListUsers,AddUsers, LoginUSER} from '../redux-constants';
import user from '../../controller/User';
import { ACCESS_TOKEN, USER_ID,USER_LOGGED,USER } from '../../utils/local-Storage.utils';

export const addUser = (data) => async dispatch => {
    try {
       
        console.log("hello addUser data ",data)
        dispatch({
            type: AddUsers.ADD_USERS_REQUEST
        });
        console.log('before addUser');
        await user.addUser(data);
        console.log('after addNote');
        const respond = user.getResponse();

        if (respond.success) {
            const { response } = respond;
            console.log('success');
            dispatch({
               
                type: AddUsers.ADD_USERS_SUCCESS,
                payload: response
            });
        } else {
            console.log('fails');
            const { message } = respond;
            dispatch({
                type: AddUsers.ADD_USERS_FAIL,
                payload: message
            });
        }
    } catch (error) {
        dispatch({
            type: AddUsers.ADD_USERS_FAIL,
            payload: error
        });
    }
};

export const LoginU = (data) => async dispatch => {
 

    try {

       
        dispatch({
            type: LoginUSER.LOG_USER_REQUEST
        });
        await user.LoginUser(data);
        const respond = user.getResponse();


        if (respond.success) {

            const { response } = respond;
            sessionStorage.setItem('user', JSON.stringify(response));
            var _id = JSON.parse( sessionStorage.getItem('user')).id;
var userI= JSON.parse( sessionStorage.getItem('user'));
            sessionStorage.setItem(USER_ID,_id);

            sessionStorage.setItem(USER_LOGGED,true);
        
            sessionStorage.setItem(ACCESS_TOKEN,respond.token);

            sessionStorage.setItem(USER,userI);

      

    

            if(respond.token === null){
                sessionStorage.clear();
            }

            dispatch({
               
                type: LoginUSER.LOG_USER__SUCCESS,
                payload: response
            });


        } else {
            console.log('fails');
            sessionStorage.clear();
            sessionStorage.setItem(USER_LOGGED,false);
            const { message } = respond;
            dispatch({
                type: LoginUSER.LOG_USER__FAIL,
                payload: message
            });

        }
    } catch (error) {
        dispatch({
            type: LoginUSER.LOG_USER__FAIL,
            payload: error
        });
    }
};

export const listUser = () => async dispatch => {
    try {
        dispatch({
            type: ListUsers.LIST_USERS_REQUEST
        });

        await user.getUsers();
        const respond = user.getResponse();
        if (respond) {
            dispatch({
                type: ListUsers.LIST_USERS_SUCCESS,
                payload: respond
            });
        } else {
            const { message } = respond;
            dispatch({
                type: ListUsers.LIST_USERS_FAIL,
                payload: message
            });
        }
    } catch (error) {
        dispatch({
            type: ListUsers.LIST_USERS_FAIL,
            payload: error
        });
    }
};

export const listUse = () => async dispatch => {
    try {
        dispatch({
            type: ListUsers.LIST_USERS_REQUEST
        });

        await user.getUsers();
        const respond = user.getResponse();
        if (respond) {
            dispatch({
                type: ListUsers.LIST_USERS_SUCCESS,
                payload: respond
            });
        } else {
            const { message } = respond;
            dispatch({
                type: ListUsers.LIST_USERS_FAIL,
                payload: message
            });
        }
    } catch (error) {
        dispatch({
            type: ListUsers.LIST_USERS_FAIL,
            payload: error
        });
    }
};