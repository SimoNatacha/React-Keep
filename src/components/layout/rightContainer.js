import React from 'react'
import {  Route, Switch } from 'react-router-dom';
import Notes from './public/notes';
import Reminders from './public/reminders';
import Labels from './public/labels';
import ModifyLabels from './public/modify-labels';
import Archive from './public/archive';
import Delete from './public/Delet';

 const rightContainer = () => {
    return (

       <Switch>

       <Route exact path="/" component={Notes}/>

       <Route exact path="/reminders" component={Reminders}/>
       <Route exact path="/labels" component={Labels}/>
       <Route exact path="/archive" component={Archive}/>
       <Route exact path="/modifyLabels" component={ModifyLabels}/>
       <Route exact path="/delete" component={Delete}/>


       </Switch>
    )
}
export default rightContainer;