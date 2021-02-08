import React from "react";
import Icons from "../../assets/Icons";
const Note = () => {
  return (
    <div className="all">
      <div className="card-note border">
        <div className="check ">
          {" "}
          <Icons focusable="false" name="CheckCircle" size="24" />
        </div>
        <div className="content ">
          <div className="dp-f">
            <div className="headerNote">
           Hii
            </div>
            <div className="pinNote">
              <Icons focusable="false" name="Pinned" size="20" />
            </div>
          </div>
         <div className="note-content">
         Hii</div>
<br/>

          <div className=" down-notes ">
         
            <Icons focusable="false" name="AddNotification" size="18" />
            <Icons focusable="false" name="AddUser" size="18" />
            <Icons focusable="false" name="Color" size="18" />
            <Icons focusable="false" name="ImageH" size="18" />
            <Icons focusable="false" name="Archive" size="18" />
            <Icons focusable="false" name="More" size="18" />
    
        </div>
        </div>
      </div>
    </div>
  );
};

export default Note;
