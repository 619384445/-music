import React,{Fragment} from 'react';
import './index.css'
import {getwy} from '../../api'
import {withRouter} from "react-router-dom"

class Song extends React.Component {
    constructor(props) {
        super(props);

        if(!this.props.location.query){
            let  data = JSON.parse(sessionStorage.getItem("song"));
            this.state=data;
        }else{
            let id=this.props.location.query.id;
            this.getSong(id);
            this.state = {
                list:{},
                flag:false,
                strFlag:false,
                str:''
            }
        }
       
    }
    render() {
        let {list,flag,str,strFlag}=this.state;
        let {playlist}=list;
      
        return (
            <div>
                <div className='blck' onClick={this.blck.bind(this)}>
                    &lt;
                </div>
                {
                playlist?<Fragment>
                <div className="song-title" style={{backgroundImage:'url('+playlist.coverImgUrl+')'}}>
                    <div className="song-img">
                        <img src={playlist.coverImgUrl}/>
                    </div>
                    <div className="song-user">
                        <h2>{playlist.name}</h2>
                        <h1>
                            <div>
                                <img src={playlist.creator.avatarUrl} />
                            </div>
                            <span>{playlist.creator.nickname}</span>
                        </h1>
                    </div>
                </div>
                <div className="song-msg">
                    <div>
                        标签：{
                            playlist.tags.map((item,index)=>(
                                <span key={index}>{item}</span>
                            ))
                        }
                    </div>
                    <div ref='msg' className='msg'>
                        {
                            flag?(strFlag?playlist.description:str):playlist.description
                        } 
                        {
                            flag?<span className='msg-btn'
                                onClick={this.zk.bind(this)}
                            >{strFlag?'收起':'展开'}</span>:''
                        }
                    </div>
                </div>
                <p className='songT'>歌曲列表</p>

                <ul className="music-list">
                         {
                                playlist.tracks.map((item)=>(
                                    <li key={item.id}  onClick={this.getm.bind(this,item.id,item.al.picUrl)}>
                                        <h2>{item.name}</h2>
                                        <span>{item.ar.map((i)=>(i.name+' / '))}</span>
                                     </li>
                                ))
                        }
                       
                    </ul>
                    <p className='songT'>评论列表</p>
                </Fragment>:''
                }
            </div>
        )
    }
   
    async  getSong(id){
        let data = await  getwy('http://47.100.53.108:8081/playlist/detail?id='+id);
          this.setState({
              list:data
          })
         
          let str =this.state.list.playlist.description;
            if(str.length>80){
                str=str.slice(0,80);
                this.setState({
                    flag:true,
                    str:str+'......'
                })
            }
            sessionStorage.setItem("song",JSON.stringify(this.state));
      }

      zk(){
          let fg=!this.state.strFlag
        this.setState({
            strFlag:fg
        })
      }

      blck(){
        this.props.history.goBack();
      }
      async  getm(id,img){
        let data = await  getwy("http://47.100.53.108:8081/music/url?id="+id);
        data=data.data[0];
        this.props.history.push({pathname:'/music',query:{data,img}});
      }
}
export default withRouter(Song);
