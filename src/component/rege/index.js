import React from 'react';
import {getwy} from '../../api'

export default class Rege extends React.Component{
    constructor(){
        super();
        this.state={
            list:[]
        }
        this.getRege();
    }
        render(){
            let {list}=this.state;
            return(
                <div>
                    <div className='regeImg'>
                        <img src='https://p1.music.126.net/GhhuF6Ep5Tq9IEvLsyCN7w==/18708190348409091.jpg' alt='热歌榜'/>
                    </div>
                   <ul className="music-list">
                        {
                                list.map((item,index)=>(
                                    <li key={index} >
                                        <h2>{item.name}</h2>
                                        <span>{item.ar.map((i)=>(i.name+' / '))}</span>
                                     </li>
                                ))
                        }
                       
                    </ul>
                </div>
            )
        }
        async  getRege(){
            let data = await  getwy('http://47.100.53.108:8081/playlist/detail?id=2808424823');
              this.setState({
                  list:data.playlist.tracks
              })
          }
}