import React,{ useState} from "react";
import Icons from "../../assets/Icons";
import { useDispatch } from 'react-redux';
import { addNotes, notesById } from '../../redux/actions/notes';
const BarNote = () => {
  const dispatch = useDispatch();
  const [note, setNote] = useState({
    title: "",
    note: "",
  });
  const [click, setClick] = useState(false);

  const handleChange = (evt) => {
    evt.preventDefault();
    const value = evt.target.value;
    setNote({
      ...note,
      [evt.target.name]: value,
    });
  }

  const onclick = (e) => {
    e.preventDefault();
    setClick(true);
  };


  const saveNote =async (e) => {
    e.preventDefault();
    console.log("submit",note)

    if (Object.keys(note.title).length === 0) { 
      console.log("offfffff....")

setClick(false);

    } 
    if( Object.keys(note.note).length === 0){
      console.log("offfffff....")

setClick(false);
    }
    else{
      await dispatch(addNotes(note));

      dispatch(notesById(sessionStorage.getItem('user_id')));
  
      setNote({
        title: '',
        note: '',
      });
    }
    



};
  return (
    <div>
      {click ? (
          <form className="bar-2" onSubmit={e=>{saveNote(e)}}>
            <div className="dp-f header-note">
              <div className=" input-header input-create" >
                <input
                  type="text"
                  name="title"
                  placeholder="Title"
                  onChange={e=>handleChange(e)}
                />
              </div>

              <Icons focusable="false" name="Pinned" size="20" />
            </div>
            <br />
            <div className="input-note">
              <input
                type="text"
                name="note"
                autoFocus
                placeholder="Create a note..."
                onChange={e=>handleChange(e)}
              />
            </div>
            <br />

            <div className="dp-f elements-notes ">
              <div className="dp-f set-one-elements ">
                <Icons focusable="false" name="AddNotification" size="18" />
                <Icons focusable="false" name="AddUser" size="18" />
                <Icons focusable="false" name="Color" size="18" />
                <Icons focusable="false" name="ImageH" size="18" />
                <Icons focusable="false" name="Archive" size="18" />
                <Icons focusable="false" name="More" size="18" />
                <Icons focusable="false" name="Undo" size="18" />
                <Icons focusable="false" name="Redo" size="18" />
              </div>
              <div className="set-two">
                <button >
                  Close
                </button>
              </div>
            </div>
          </form>
     
      ) : (
        <div className="bar-note" onFocus={onclick}>
          <div className="default">
            <div className="dp-f inside-bar">
              <div className="input-create">
                <input type="text" placeholder="Create a note..." />
              </div>
              <div className="dp-f outers ">
                <div className="icon-icon icon">
                  <Icons focusable="false" name="Check" size="20" />
                </div>
                <div className="icon-icon icon">
                  <Icons focusable="false" name="Paint" size="20" />
                </div>
                <div className="icon-icon icon">
                  <Icons focusable="false" name="ImageH" size="20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <br/>
    </div>
  );
};

export default BarNote;
