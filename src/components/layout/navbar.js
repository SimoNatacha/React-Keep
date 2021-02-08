/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {  useState } from "react";
import Icons from "../../assets/Icons";

const Navbar = ({}) => {
  const initialState = { backgroundColor: "#f1f3f4" };
  const [active, setactive] = useState(false);
  const [listmode, setlistmode] = useState(false);
  const [cancel, setcancel] = useState(false);
  const [state] = useState(initialState);

  const click = () => {
    setactive(true);
    setcancel(true);
  };
  const out = () => {
    setactive(false);
  };
  const handleSearch = (evt) => {
    evt.preventDefault();
    setactive(false);
    setcancel(false);
  };
  const ShowListMode=()=>{
    setlistmode(true)
  }
  const ShowGridMode=()=>{
    setlistmode(false)
  }
const color="#4f4f4fd2"
  return (
    <div className="nav-bar dp-f ">
      <div className="keep-icon dp-f ">
        <div className="list-3 icon">
          <Icons focusable="false" name="List" size="24" />
        </div>
        <div className="name-page">
          <a href="" className="dp-f">
            <img
              className="img "
              src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
              srcSet="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png 1x, https://www.gstatic.com/images/branding/product/2x/keep_2020q4_48dp.png 2x "
              alt=""
              aria-hidden="true"
              style={{ width: "40px", height: "40px" }}
            ></img>
            <span className="span ">
              <h6>Keep</h6>
            </span>
          </a>
        </div>
      </div>
      <div
        className={active ? "active search-div" : "search-div "}
        style={state}
        onFocus={click}
        onBlur={out}
      >
        <form
          action=""
          method="get"
          className="dp-f"
          onSubmit={() => alert("submitted")}
        >
          <button className="icon search-icon ">
            <Icons focusable="false" name="Search" size="24" />
          </button>
          <div className="research ">
            <input type="text" placeholder="Research" />
          </div>

          {cancel ? (
            <button
              className="cancel-icon icon"
              onClick={(e) => handleSearch(e)}
            >
              <Icons focusable="false" name="Cross" size="24" />
            </button>
          ) : (
            ""
          )}
        </form>
      </div>
      <div className="dp-f icons-end ">
        <div className="dp-f refresh-mode ">
          <div className="side-icons" >
            <Icons focusable="false" name="Refresh" viewBox="-3 -3 25 24" size="36"  className="icons-n" color={color}/>
          </div>


          {
            listmode? (  <button className="side-icons" onClick={ShowGridMode}>
            <Icons focusable="false" name="ListMode" size="25" viewBox="0 2.3 25 20"   className="icons-n" color={color}/>
          </button>):(  <button  className="side-icons" onClick={ShowListMode}>
          <Icons focusable="false" name="GridMode" size="25" viewBox="0 2.3 25 20"   className="icons-n mg-t" color={color}/>
        </button>)
          }
       
        
          <div className="   side-icons">
            {" "}
            <Icons focusable="false" name="Settings" viewBox="2 -3 20 30"   className="icons-n" color={color}/>
          </div>
        </div>
        <div className="  dp-f user-show ">
          <div className="   side-icons">
            <Icons focusable="false" name="Mult"  viewBox="3 -3 20 30"   className="icons-n" color={color}/>
          </div>
          <div className=" circle  side-icons">
            <Icons focusable="false" name="UserCircle"  viewBox="-2 1 28 22"   className="icons-n" color={color}/>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;

