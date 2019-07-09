import React from 'react';
import {getwy} from '../../api'
import './index.css'
import {withRouter} from "react-router-dom"

 class Serach extends React.Component {
    constructor(){
        super();
       this.state={
         txt:'',
         hot:[],
         list:[]
       }
       this.getSeachHot();
    }
    render(){
        let {hot,txt,list} = this.state;
        return(
            <div>
                <div className='search-box'>
                    <input type='text'  value={this.txt} onChange={this.vTxt.bind(this)} className='serach'/>   
                </div>  
                {
                   
                    txt===""?
                    <dl className='search-hot'>
                        <dt>热搜</dt>
                        {
                            hot.map((item,index)=>(
                                <dd key={index}>{item.first}</dd> 
                            ))
                        }
                    </dl>:
                    <dl className='search-list'>
                        <dt>搜索:{txt}</dt>
                        {
                            list?list.map((item,index)=>(
                                <dd key={index}
                                   onClick={this.seachM.bind(this,item.id)}
                                >{item.name}</dd> 
                            )):''
                        }
                    </dl>
                }
               
            </div>
        )
    }
    vTxt(e){
        this.setState({
            txt:e.target.value
        })
        this.getSeach(e.target.value)
    }
    async  getSeach(value){
        let data = await  getwy("http://47.100.53.108:8081/search?keywords="+value+'&limit=15&type=1');
        if(data.result){
            this.setState({
                list:data.result.songs
            })
        }
       
      }
    async  getSeachHot(){
        let data = await  getwy("http://47.100.53.108:8081/search/hot");
        if(data.result.hots){
            this.setState({
                hot:data.result.hots
            })
        }
      }
      async  seachM(id){
        let data = await  getwy("http://47.100.53.108:8081/music/url?id="+id);
        let img = await  getwy("http://47.100.53.108:8081/song/detail?ids="+id);
        data=data.data[0];
        img=img.songs[0].al.picUrl;
        this.props.history.push({pathname:'/music',query:{data,img}});
      }
    
}
export default withRouter(Serach);
