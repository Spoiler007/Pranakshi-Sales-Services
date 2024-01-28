import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Garden from '@/components/Pages/Garden';
import Indoor from '@/components/Pages/Indoor';
import Outdoor from '@/components/Pages/Outdoor';



const Router = () => {
  return (
    <div>
<Routes>
    <Route path='/garden' element={<Garden/>}/>
    <Route path='/indoor' element={<Indoor/>}/>
    <Route path='/outdoor' element={<Outdoor/>}/>
</Routes>

    </div>
  )
}

export default Router;