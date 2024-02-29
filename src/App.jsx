

import React from 'react'
import { Routes, Route } from 'react-router-dom'
import "./App.css"
import LandingPage from './stores/pages/LandingPage'
import MobilePage from './stores/pages/MobilePage'
import Navbar from './stores/components/Navbar';
import ComputersPage from './stores/pages/ComputersPage'
import WatchesPage from './stores/pages/WatchesPage'
import WomenPage from './stores/pages/WomenPage'
import MenPage from './stores/pages/MenPage'
import FurnatuerPage from './stores/pages/FurnatuerPage'
import MobileSingle from './singles/MobileSingle'
import ComputerSingle from './singles/ComputerSingle'
import UserCard from './stores/UserCard'
import WatcheSingle from './singles/WatcheSingle'
import FurnatuerSingle  from './singles/FurnatuerSingle'


const App = () => {
  return (
    <div>
      <Navbar />

      <hr style={{height: "10px", color:"red"}}></hr>
      <div style={{margin: "5px 10px"}}>
      <Routes>
        <Route path='/' element = {<LandingPage />}/>
        <Route path='/mobiles' element={<MobilePage/>} />
        <Route path='/computers' element={<ComputersPage/>}/>
        <Route path='/watches' element={<WatchesPage/>}/>
        <Route path='/women' element={<WomenPage/>}/>
        <Route path='/men' element={<MenPage/>}/>
        <Route path='/furnatuer' element={<FurnatuerPage/>}/>
            <Route path='/mobiles/:id' element={<MobileSingle/>}/>
            <Route path='/computers/:id' element={<ComputerSingle/>}/>
            <Route path='/watches/:id' element={<WatcheSingle/>}/>
            <Route path='/furnatuers/:id' element={<FurnatuerSingle/>}/>
            <Route path='/cart' element={ <UserCard/>}/>
      </Routes>
      </div>
        
        
    </div>
  )
}

export default App