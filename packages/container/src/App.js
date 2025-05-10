import React,{lazy, Suspense} from "react";
import Header from "./components/Header"; 
import {BrowserRouter,Switch,Route} from "react-router-dom" 
import {StylesProvider,createGenerateClassName} from "@material-ui/core/styles";
import Progress from "./components/Progress";
const MarketingApp = lazy(()=> import("./components/MarketingApp"))
const AuthApp = lazy(()=> import("./components/AuthApp"))
const generateClassName = createGenerateClassName({
   productionPrefix:"co"
})
export default ()=>{
   const [signedIn,setSignedIn] = React.useState(false)
   return (
   <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
      <div>
         <Header isSignedIn = {signedIn} onSignOut={()=>setSignedIn(false)}/> 
         <Suspense fallback={<Progress/>}>
         <Switch>
            <Route path="/auth" >
               <AuthApp onSignIn={()=>setSignedIn(true)}/>
            </Route>
            <Route path="/" component={MarketingApp}/>
         </Switch>
         </Suspense>
      </div>
      </StylesProvider>
   </BrowserRouter>
   )
}