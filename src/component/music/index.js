import React from 'react';
import './index.css'
import {withRouter} from "react-router-dom"

var durationBtn,durationBox,duration;
var volume,volumeBox,volumeBtn;

 class Music extends React.Component{
    
    constructor(props){
        super(props);
        if(this.props.location.query){
            sessionStorage.setItem("music",JSON.stringify(this.props.location.query));
        }else{
            var musics = JSON.parse(sessionStorage.getItem("music"));
        }
        this.state={
           music:this.props.location.query||musics,
           flag:false,
           duration:"0:00",
           durationMin:'0:00',
           time:null
       }
       
     
    }

 
    render(){
        let {data,img,}=this.state.music;
        let {flag,duration,durationMin}=this.state;

        return(
            <div className="music-wrap" style={{backgroundImage:'url('+img+')'}}>
              <div className='back' onClick={this.blck.bind(this)}>
                    &lt;
                </div>
                <div className={flag?'music-box dh':'music-box dh2 dh'}
                    onClick={this.play.bind(this)}
                 >
                    <div className='music-img'>
                        <img src={img}/>
                    </div>   
                </div>
                <audio   ref='music'  
                src={data.url}>
                </audio>

                <div className='music'>
                    
                        <span>{durationMin}</span>
                        <div className='duration-box' ref='durationBox'>
                           <div className='duration' ref='duration'>
                            </div>
                            <span className='duration-btn' ref='durationBtn'></span>
                        </div>
                        <span>{duration}</span>
                        <span>音量</span>

                        <div className='volumes'>
                            <div className='volume-box' ref='volumeBox'>
                                    <div className='volume' ref='volume'>
                                    </div>
                                    <span className='volume-btn' ref='volumeBtn' ></span>
                                </div>
                        </div>
                </div>
                
            </div>
        )
    }
 
    play(){
        let f1=!this.state.flag
        this.setState({
            flag:f1
        })
        if(f1){
            this.refs.music.play();
            let sc=durationBox.offsetWidth/100;
            this.state.time=setInterval(()=>{
               let min=parseInt(this.refs.music.currentTime/this.refs.music.duration*100);
               this.setState({
                    durationMin:this.getMin(this.refs.music.currentTime)
               })
               durationBtn.style.left = sc*min + "px";
               duration.style.width=sc*min + "px";
            },1000);
        }else{
            this.refs.music.pause();
            clearInterval(this.state.time)
        }
    }
    blck(){
        this.props.history.goBack();
      }
    
      componentDidMount(){
        let sc=null;
        this.refs.music.load();
        this.refs.music.ondurationchange= ()=>{
          sc=this.refs.music.duration;
          this.refs.music.volume=0.4;
          this.setState({
            duration:this.getMin(sc)
          })
        }
        durationBtn=this.refs.durationBtn;
        durationBox=this.refs.durationBox;;
        duration=this.refs.duration;
        volumeBox=this.refs.volumeBox;
        volume=this.refs.volume;;
        volumeBtn=this.refs.volumeBtn;

            durationBtn.ontouchstart=function(e){
                var e = e || window.event;
                var disX = e.targetTouches[0].clientX - durationBtn.offsetLeft;
                document.ontouchmove = function(e){
                    var e = e || window.event;
                    var  leftX = e.targetTouches[0].clientX - disX;
                    if( leftX < 0 ){
                        leftX = 0;
                    }
                    else if(  leftX > durationBox.offsetWidth - durationBtn.offsetWidth ){
                        leftX = durationBox.offsetWidth - durationBtn.offsetWidth;
                    }
                    durationBtn.style.left = leftX + "px";
                    duration.style.width=leftX + "px";
                    let  bl=duration.offsetWidth/(durationBox.offsetWidth - durationBtn.offsetWidth);
                      bl=parseInt(bl*100);
                    let num=parseFloat(this.refs.music.duration)/100;
                    this.setState({
                        durationMin:this.getMin(bl*num)
                   })
                   this.refs.music.currentTime=bl*num;
                }.bind(this)
                document.ontouchend = function(){
                    document.onmousemove = null;
                    document.onmouseup = null;
                }
                return false;
            }.bind(this)
        volumeBtn.ontouchstart=function(e){
            var e = e || window.event;
            var disY = e.targetTouches[0].clientY - volumeBtn.offsetTop;
             document.ontouchmove = function(e){
                var e = e || window.event;
                var  leftY = e.targetTouches[0].clientY - disY;
                if( leftY < 0 ){
                    leftY = 0;
                }
                else if(  leftY > volumeBox.offsetHeight - volumeBtn.offsetHeight ){
                    leftY = volumeBox.offsetHeight - volumeBtn.offsetHeight;
                }
                volumeBtn.style.top = leftY + "px";
                volume.style.height=leftY + "px";
                let  bl=volume.offsetHeight/(volumeBox.offsetHeight - volumeBtn.offsetHeight);
                  bl=parseInt(bl*100);
                  bl=-bl+100;
                this.refs.music.volume=bl/100;
            }.bind(this)
            document.ontouchend = function(){
                document.onmousemove = null;
                document.onmouseup = null;
            }
            return false;
        }.bind(this)

        }
      
        getMin(sc1){
            let scM=null;
            let scS=null;
            scM=parseInt(sc1/60);
            scS=parseInt(sc1%60);
            scM=scM?scM:'0';
            scS=parseInt(scS/10)!=0?scS:"0"+scS;
            return scM+':'+scS;
        }
       
        componentWillUnmount(){
            clearInterval(this.state.time);
            durationBtn.ontouchstart=null;
            volumeBtn.ontouchstart=null;
        }
   
}
export default withRouter(Music);