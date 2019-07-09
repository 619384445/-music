import React from 'react';
import {Switch,Route,Redirect,HashRouter as Router} from "react-router-dom"
import {mainRoute,childrenRoute} from './router'
 
class App extends React.Component{
  
  render(){
  
    return (
     <Router>
          <Switch>
                {
                  mainRoute.map((item)=>(
                    <Route path={item.pathname} key={item.pathname} render={()=>{
                      return <item.component/>
                    }}/>
                  ))
                }
              
                <Redirect from="/" to="/home"  />
                <Redirect from="**" to="/404" />
              
          </Switch>
      </Router>
    )
  }
}
export default  App;
