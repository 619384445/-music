import React from 'react';


// const style = {
//     float: 'left',
//     height: 100,
//     marginLeft: 70,
//   };
  
export default class Music extends React.Component {
    constructor(){
        super();
    
       this.state={
           music:{},
           time:0,
           t:null
       }
    }

 
    render(){
        let {time}=this.state;
        return(
            <div className='music'>
                <div>
                    {/* <button onClick={this.play.bind(this)}> 点击播放</button> */}
                    {/* <Slider  disabled={false}  onChange={this.sc.bind(this)} value={time||0}/> */}
                    {/* <div style={style}>
                        <Slider vertical defaultValue={30} onChange={this.yl.bind(this)} />
                    </div> */}
                </div>
                <audio  controls="controls"  ref='music'
                src={this.props.music.url||"http://m10.music.126.net/20190622160642/6130af2f4be527eee621e2229df45489/ymusic/050e/0259/515b/2d7870595f53bce5461ef1727086b4a6.mp3"}>
                </audio>
            </div>
        )
    }
    // componentDidMount(){
    //     this.refs.music.onended=()=>{
    //         clearInterval(this.t);
    //     }
    // }
    // play(){
    //     this.refs.music.play();
    //     this.t=setInterval(()=>{
    //         let num= (this.refs.music.currentTime*100)/this.refs.music.duration
    //         this.setState({
    //             time:num
    //         })
    //     },1000)
    // }
    // yl(value){
    //    this.refs.music.volume=value/100;
    // }
    // sc(value){
    //   let num=parseFloat(this.refs.music.duration)/100;//currentTime
    //   this.refs.music.currentTime=num*value;
    // }

}