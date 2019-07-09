import React from 'react';
import {getwy} from '../../api'
import logo from '../../common/img/logo.png'
import {withRouter} from "react-router-dom"
class Recommend extends React.Component {
    constructor(){
        super();
       this.getshop2();
       this.getshop3();
       this.state={
           wylist:[],
           wylist2:[],
           music:{}
       }
    }
    render() {
        let {wylist,wylist2}=this.state;
        return (
            <div>
                <div>
                    <h1 className="Rtitle">推荐歌单</h1>
                    <div className="recommend ">
                      
                        {
                                wylist2.map((item,index)=>(
                                    index<6?
                                    <div key={index} onClick={this.songs.bind(this,item)}>
                                        <img src={item.picUrl} />
                                        <p>{item.name}</p>
                                     </div>:''
                                ))
                        }
                    </div>
                    <h1 className="Rtitle">最新音乐</h1>
                    <ul className="music-list">
                        {
                                wylist.map((item,index)=>(
                                    <li key={index} onClick={this.getm.bind(this,item.id,item.song.album.picUrl)}>
                                        <h2>{item.name}</h2>
                                        <span>{item.song.artists[0].name}</span>
                                     </li>
                                ))
                        }
                       
                    </ul>
                </div>

                <div className="foot">
                    <div>
                        <img src={logo} />
                    </div>
                    <div className="foot-btn">打开APP，发现更多好音乐 ></div>
                    <p>宇宙网络科技有限公司</p>
                </div>

             
                 
               
            </div>

               
        )
    }
    songs(item){
        this.props.history.push({pathname:'/song',query:{id:item.id}});
    }
    async  getshop2(){
      let data = await  getwy('http://47.100.53.108:8081/personalized/newsong');
        this.setState({
            wylist:data.result
        })
       
    }
    async  getshop3(){
        let data = await  getwy("http://47.100.53.108:8081/personalized");
          this.setState({
              wylist2:data.result
          })
        
      }
      async  getm(id,img){
        let data = await  getwy("http://47.100.53.108:8081/music/url?id="+id);
        data=data.data[0];
        this.props.history.push({pathname:'/music',query:{data,img}});
      }
   
}
export default withRouter(Recommend);