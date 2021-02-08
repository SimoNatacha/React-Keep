import React from "react";
import Icons from "../../assets/Icons";
const BarNote = ({onclick,submitB,handleC,click}) => {

  return (
    <div>
      {click ? (
          <div className="bar-2" >
            <div className="dp-f header-note">
              <div className=" input-header input-create" >
                <input
                  type="text"
                  name="title"
                  placeholder="Title"
                  onChange={handleC}
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
                onChange={handleC}
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
                <button  onClick={submitB}>
                  Close
                </button>
              </div>
            </div>
          </div>
     
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
