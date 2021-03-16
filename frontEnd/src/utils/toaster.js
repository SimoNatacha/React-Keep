import React from 'react'
import Icons from '../assets/Icons'

const toaster=({Position="bottom-right",Title,Message,backgroundColor= '#d9534f'})=> {


 
const success =({Position="bottom-right",Title,Message,backgroundColor= '#5cb85c'})=>{


return(
    <div className={`notification-container ${Position}`}>
    <div className={`notification toast ${Position}`}
    style={{ backgroundColor: backgroundColor }}
    >
    <button>
        X
    </button>
    <div className="notification-image">
      <Icons focusable="false" name="CheckCircle" size="24" color="#5cb85c"/>
    </div>
    <div>
        <p className="notification-title">{Title}</p>
        <p className="notification-message">{Message}</p>
    </div>
</div>
    </div>
)

}
 
 const danger =({Position="bottom-right",Title,Message,backgroundColor= '#d9534f'})=>{

console.log("danger")
    return(

        <div className={`notification-container ${Position}`}>
        <div className={`notification toast ${Position}`}
        style={{ backgroundColor: backgroundColor, border:'2px solid red' }}
        >
        <button>
            X
        </button>
        <div className="notification-image">
          <Icons focusable="false" name="CheckCircle" size="24" color="#d9534f"/>
        </div>
        <div>
            <p className="notification-title">{Title}</p>
            <p className="notification-message">{Message}</p>
        </div>
    </div>
        </div>
    )
    
    }
     
 const info =({Position="bottom-right",Title,Message,backgroundColor= '#5bc0de'})=>{


    return(
        <div className="notification-container bottom-right">
        <div className={`notification toast `}
        style={{ backgroundColor: backgroundColor }}
        >
        <button>
            X
        </button>
        <div className="notification-image">
        <Icons focusable="false" name="CheckCircle" size="24" color="#5bc0de"/>
        </div>
        <div>
            <p className="notification-title">{Title}</p>
            <p className="notification-message">{Message}</p>
        </div>
    </div>
        </div>
    )
    
    }
     
//  const warning =({Position="bottom-right",Title,Message,backgroundColor= '#f0ad4e'})=>{
console.log("toast")

    return(
        <div className={`notification-container ${Position}`}>
        <div className={`notification toast ${Position}`}
        style={{ backgroundColor: backgroundColor }}
        >
        <button>
            X
        </button>
        <div className="notification-image">
          <Icons focusable="false" name="CheckCircle" size="24" color="#f0ad4e"/>
        </div>
        <div>
            <p className="notification-title">{Title}</p>
            <p className="notification-message">{Message}</p>
        </div>
    </div>
        </div>
    )
    
    // }

    
}

export default  toaster;
