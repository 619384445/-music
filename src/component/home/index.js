import React from 'react';
import Header from '../header'
import  './index.css';
import {Switch,Route,Redirect} from "react-router-dom"
import {childrenRoute} from '../../router'

import {withRouter} from "react-router-dom"

 class Home extends React.Component{
        render(){
            return( 
                  <div className='home'>
                    <Header></Header>
                        <Switch>
                                {
                                childrenRoute.map((item)=>(
                                    <Route path={item.pathname} key={item.pathname} render={()=>{
                                    return <item.component/>
                                    }}/>
                                ))
                                }
                              <Redirect from="/home" to="/home/recommend" />           
                        </Switch>
                        {this.props.children}
                    </div>
              
            )  
        }
}
export default withRouter(Home)