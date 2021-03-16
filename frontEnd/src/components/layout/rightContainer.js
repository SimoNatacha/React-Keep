import React from 'react'
import { Route, Switch ,Redirect,useRouteMatch} from 'react-router-dom';
import Notes from './public/notes';
import Reminders from './public/reminders';
import Labels from './public/labels';
import ModifyLabels from './public/modify-labels';
import Archive from './public/archive';
import Delete from './public/Delet';

 const RightLayout = () => {

     let { path } = useRouteMatch();
    return (

       <Switch>

   


       <Route   path={`${path}/notes`} component={Notes}/>

       <Route  path={`${path}/reminders`} component={Reminders}/>
       <Route  path={`${path}/labels`} component={Labels}/>
       <Route  path={`${path}/archive`} component={Archive}/>
       <Route  path={`${path}/modifyLabels`} component={ModifyLabels}/>
       <Route  path={`${path}/delete`} component={Delete}/>

       <Route exact path={`${path}`}>
       <Redirect  to={`/dashboard/notes`} component={Notes}/>
     </Route>
       </Switch>
    )
}

export default RightLayout;