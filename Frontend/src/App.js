import React from 'react'
import { Route, Routes} from "react-router-dom"
import Navbar from './components/Navbar'
import Records from './components/Records'
import Allrecords from './components/Allrecords'
import EditCom from './components/EditCom'
import DeleteCom from './components/DeleteCom'

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route path='/Records' element={<Records/>}/>
    <Route path="/allproductsrecord" element={<Allrecords/>}/>
    <Route path="/edit/:id" element={<EditCom/>}></Route>
    <Route path="/delete/:id" element={<DeleteCom/>}></Route>

    </Routes>
    </>
  )
}

export default App

