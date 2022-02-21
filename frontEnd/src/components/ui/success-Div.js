import React from 'react';

const success = ({successM}) => {
	return (
		<div>
			<div className=" row  ">
    
				<div className="col">
        
					<div className=" success-div br-5 ">
       
						<p style={{color: 'rgb(67, 170, 79) ', fontSize:'14px' , marginTop:'2px'}}>{successM}</p>
					</div></div>
       
			</div>
		</div>
	);
};
export default success;