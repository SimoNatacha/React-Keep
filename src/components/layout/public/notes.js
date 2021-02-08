import React, { useState } from "react";
import BarNote from "../../ui/BarNote";
import CardNote from "../../ui/note-card";
const Notes = () => {
  const [click, setClick] = useState(false);

  let [key, setkey] = useState(0);
  let map = new Map();

  const [state, setState] = useState({
    title: "",
    note: "",
  });

  const handleChange = (evt) => {
    evt.preventDefault();
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    // console.log("before map");
    map.set(key, state);

    console.log("map", map);
    setkey(key + 1);
    setClick(false);
    console.log(key, "after setKey");
  };
  // const Blur=()=>{
  //   setClick(false)
  // }

  const onClick = (e) => {
    e.preventDefault();
    setClick(true);
  };

  return (
    <div className="right-bar">
      <div className="noted ">
        <BarNote
          handleC={(e) => handleChange(e)}
          onclick={(e) => {
            onClick(e);
          }}
          submitB={(e) => submit(e)}
          click={click}
        />

        <br />
      </div>
      <br />
      <div className="dp-f display-notes ">
     <div className="dp-f border-2px">
     <CardNote/>    <CardNote/> </div>
      </div>
    </div>
  );
};
export default Notes;
