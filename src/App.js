import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'

// Components
import Sidebar from './Components/Sidebar/Sidebar'
import Users from './Components/Users/Users'
import Trends from './Components/Trends/Trends'

// Pages
import Home from './Components/pages/Home'
import Profile from './Components/pages/Profile'
import Explore from './Components/pages/Explore'
import Notifications from './Components/pages/Notifications'
import Messages from './Components/pages/Messages'
import Bookmarks from './Components/pages/Bookmarks'
import Lists from './Components/pages/Lists'
import More from './Components/pages/More'

export default function App() {
  return (
    <div className='app'>
      <Sidebar />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/Explore' element={ <Explore /> } />
        <Route path='/Notifications' element={ <Notifications /> } />
        <Route path='/Messages' element={ <Messages /> } />
        <Route path='/Bookmarks' element={ <Bookmarks /> } />
        <Route path='/Lists' element={ <Lists /> } />
        <Route path='/Profile' element={ <Profile /> } />
        <Route path='/More' element={ <More /> } />
      </Routes>
      <div>
        <Trends />
        <Users />
      </div>
    </div>
  )
}

