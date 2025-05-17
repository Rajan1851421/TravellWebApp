import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../page/About'
import AddVehicle from '../page/AddVehicle'
import Testimonila from '../page/Testimonial'
import Contact from '../page/Contact'
import Home from '../Home'
import ExploreVehicle from '../page/ExploreVehicle'


function Router() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/add-vehicle' element={<AddVehicle/>}/>
            <Route path='/testimonial' element={<Testimonila/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/explore-Vehicle' element={<ExploreVehicle/>}/>

        </Routes>
    </div>
  )
}

export default Router