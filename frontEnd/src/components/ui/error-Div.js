import React from 'react'

 const error = ({header,error}) => {
    return (
        <div className=" row  ">
    
            <div className="col">
            
            <div className=" error-div br-5 ">
                <header style={{color: 'rgba(213, 62, 62, 0.864)', fontWeight:'500'}}>{header}</header>
           
                <p style={{color: 'rgba(213, 62, 62, 0.864)', fontSize:'14px' , marginTop:'2px'}}>{error}</p>
            </div></div>
           
        </div>
    )
}
export default error;