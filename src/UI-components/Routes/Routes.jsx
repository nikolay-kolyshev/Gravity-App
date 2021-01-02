import React from "react"
import {Route, Switch, Redirect} from "react-router-dom";
import Quiz from "../Quiz/Quiz";
import WeightProgram from "../WeightProgram/WeightProgram";
import PaymentProgram from "../PaymentProgram/PaymentProgram";

export default () => {
    return (
       <Switch>
           <Route exact path="/quiz">
               <Quiz/>
           </Route>
           <Route exact path="/weight_program">
               <WeightProgram/>
           </Route>
           <Route exact path="/payment_program">
               <PaymentProgram/>
           </Route>
           <Route>
               <Redirect to="/payment_program"/>
           </Route>
       </Switch>
    )
}