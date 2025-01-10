import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs'
import App from '../App';
import Products from '../pages/Products';
import PerforatingGun from '../pages/DetailProduct/PerforatingGun';
import AnfoTruck from '../pages/DetailProduct/AnfoTruck';
import XborePortable from '../pages/DetailProduct/XborePortable';
import ExplosiveStorage from '../pages/DetailProduct/ExplosiveStorage';
import HeavyEquipment from '../pages/DetailProduct/HeavyEquipment';
import DrillingTools from '../pages/DetailProduct/DrillingTools';
import FabricationAndAssembly from '../pages/DetailProduct/FabricationAndAssembly';
import WirelineTools from '../pages/DetailProduct/WirelineTools';
import MiningTools from '../pages/DetailProduct/MiningTools';
import ContactUs from '../pages/ContactUs';


function RouterProvider() {
    return (
        <Routes>
            <Route path='/' element={<App />}>
                <Route index element={<Home />} />
                <Route path='/about-us' element={<AboutUs />}/>
                <Route path='/contact-us' element={<ContactUs />}/>
                <Route path='/products' element={<Products />}/>
                <Route path='/products/perforatinggun' element={<PerforatingGun />}/>
                <Route path='/products/anfotruck' element={<AnfoTruck/>}/>
                <Route path='/products/xboreportable' element={<XborePortable />}/>
                <Route path='/products/explosivestorage' element={<ExplosiveStorage />}/>
                <Route path='/products/heavyequipment' element={<HeavyEquipment />}/>
                <Route path='/products/drillingtools' element={<DrillingTools />}/>
                <Route path='/products/fabricationassembly' element={<FabricationAndAssembly />}/>
                <Route path='/products/wirelinetools' element={<WirelineTools />}/>
                <Route path='/products/miningtools' element={<MiningTools />}/>
            </Route>
        </Routes>
    )
}

export default RouterProvider