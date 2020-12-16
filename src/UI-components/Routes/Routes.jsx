import React from "react"
import {Route} from "react-router-dom";
import Quiz from "../Quiz/Quiz";

export default () => {
    return (
       <>
           <Route to="/quiz">
               <Quiz/>
           </Route>
       </>
    )
}