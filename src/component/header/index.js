import React from 'react';
import logo from '../../common/img/logo.png'
import {NavLink} from 'react-router-dom'

export default class Header extends React.Component{
        render(){
            return(
                <div className='top'>
                    <div className="titel">
                        <div className="logo">
                            <img src={logo} alt='logo'/>
                        </div>
                        <div className="t-left">下载app</div>
                    </div>
                        <ul className="nav">
                            <li>
                                <NavLink to='/home/recommend'>推荐歌单</NavLink>
                            </li>
                            <li>
                                <NavLink to='/home/rege'>热歌榜</NavLink>
                            </li>
                            <li>
                            <NavLink to='/home/search'>搜索</NavLink>
                            </li>
                        </ul>
                </div>
            )
        }
}