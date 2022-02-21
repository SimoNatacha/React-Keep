import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {notesById} from '../../../redux/actions/notes';
import BarNote from '../../ui/BarNote';
import CardNote from '../../ui/note-card';
const Notes = () => {



	const dispatch = useDispatch();
	const { loading, notes } = useSelector(state => state.listNotes);

	useEffect( () => {
		console.log(sessionStorage.getItem('user_id'), 'USER_ID of notes');
		dispatch(notesById(sessionStorage.getItem('user_id')));
	},[dispatch]);



	return (
		<div className="right-bar">
			<div className="noted ">
				<BarNote
        
				/>

				<br />
			</div>
    
			<div className="dp-f display-notes  ">
   

     


				{!loading ? (
					notes && notes.length > 0?
						(
							<div className="sub-display ">
    
								{
									notes.map(({id,title,note})=>(

										<CardNote key={id} title={title} note={note} /> 
       
									))
								}
       
							</div>
						):(<div>No Notes</div>)
      
				):(
					<div>loading Notes</div>
				)}
   
			</div>
		</div>
	);
};
export default Notes;
