import { Routes,Route } from 'react-router-dom'
import Home from '../pages/Home'
import MainLayout from '../layouts/MainLayout'
import AboutUs from '../pages/AboutUs'
import ServicesPage from '../pages/ServicesPage'
import ServiceDetails from '../pages/ServiceDetails'
import LAcademy from '../pages/LAcademy'

const Routing = () => {
  return (
    <Routes>
        <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='/about' element={<AboutUs/>} />
        <Route path='/services' element={<ServicesPage/>} />
        <Route path='/services/:name' element={<ServiceDetails/>} />
        <Route path='/lacademy' element={<LAcademy/>} />
      </Route>
    </Routes>
  )
}

export default Routing