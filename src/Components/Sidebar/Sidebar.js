import React, { useState } from "react"
import "./Sidebar.css"
import { NavLink } from "react-router-dom"

// img
import logo from '../../Assets/images/logo.png'
import home from '../../Assets/images/home.png'
import explore from '../../Assets/images/explore.png'
import notifications from '../../Assets/images/notifications.png'
import messages from '../../Assets/images/messages.png'
import bookmarks from '../../Assets/images/bookmarks.png'
import lists from '../../Assets/images/lists.png'
import profile from '../../Assets/images/profile fill.png'
import more from '../../Assets/images/more.png'
import Bobur from '../../Assets/images/Bobur.png'
import Dots from '../../Assets/images/dots.png'
// ===========================================

export default function Sidebar() {

    const [buttonTxt, setBtnn] = useState(false)

    return (
        <section className="sidebar">
            <div className="container sidebar__container">
                <nav>
                    <ul className="sidebar__item">
                        <img className="sidebar__logo" src={ logo } alt='logo' width='40' />
                        <li className="sidebar__list">
                            <img className="sidebar__img" src={ home } alt="home" width='25' />
                            <NavLink className={ (x) => x.isActive ? "sidebar__link sidebar__link--active" : "sidebar__link" } to='/'>Home</NavLink>
                        </li>
                        <li className="sidebar__list">
                            <img className="sidebar__img" src={ explore } alt="explore" width='25' />
                            <NavLink className={ (x) => x.isActive ? "sidebar__link sidebar__link--active" : "sidebar__link" } to='/explore'>Explore</NavLink>
                        </li>
                        <li className="sidebar__list">
                            <img className="sidebar__img" src={ notifications } alt="notifications" width='25' />
                            <NavLink className={ (x) => x.isActive ? "sidebar__link sidebar__link--active" : "sidebar__link" } to='/notifications'>Notifications</NavLink>
                        </li>
                        <li className="sidebar__list">
                            <img className="sidebar__img" src={ messages } alt="messages" width='25' />
                            <NavLink className={ (x) => x.isActive ? "sidebar__link sidebar__link--active" : "sidebar__link" } to='/messages'>Messages</NavLink>
                        </li>
                        <li className="sidebar__list">
                            <img className="sidebar__img" src={ bookmarks } alt="bookmarks" width='25' />
                            <NavLink className={ (x) => x.isActive ? "sidebar__link sidebar__link--active" : "sidebar__link" } to='/bookmarks'>Bookmarks</NavLink>
                        </li>
                        <li className="sidebar__list">
                            <img className="sidebar__img" src={ lists } alt="lists" width='25' />
                            <NavLink className={ (x) => x.isActive ? "sidebar__link sidebar__link--active" : "sidebar__link" } to='/lists'>Lists</NavLink>
                        </li>
                        <li className="sidebar__list">
                            <img className="sidebar__img" src={ profile } alt="profile" width='25' />
                            <NavLink className={ (x) => x.isActive ? "sidebar__link sidebar__link--active" : "sidebar__link" } to='/profile'>Profile</NavLink>
                        </li>
                        <li className="sidebar__list">
                            <img className="sidebar__img" src={ more } alt="more" width='25' />
                            <NavLink className={ (x) => x.isActive ? "sidebar__link sidebar__link--active" : "sidebar__link" } to='/more'>More</NavLink>
                        </li>
                        <button className='sidebar__btn' onClick={ () => setBtnn(!buttonTxt) }>{ buttonTxt ? 'Tweeted' : 'Tweet' }</button>
                        <div className="sidebar__profile" >
                            <img src={ Bobur } alt='Bobur' width='50' height='50' />
                            <div className="sidebar__profile-item">
                                <p className="sidebar__profile-text">Bobur</p>
                                <span className="sidebar__profile-span">@bobur_mavlonov</span>
                            </div>
                            <img src={Dots} alt='dots' width='17' height='4'/>
                        </div>
                    </ul>
                </nav>
            </div>
        </section>
    )
}