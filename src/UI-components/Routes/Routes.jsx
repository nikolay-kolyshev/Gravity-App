import React from "react"
import {Route, Switch, Redirect} from "react-router-dom";
import Quiz from "../Quiz/Quiz";
import WeightProgram from "../WeightProgram/WeightProgram";

export default () => {
    return (
       <Switch>
           <Route exact path="/weight_program">
               <WeightProgram/>
           </Route>
           <Route exact path="/quiz">
               <Quiz/>
           </Route>
           <Route>
               <Redirect to="/weight_program"/>
           </Route>
       </Switch>
    )
}