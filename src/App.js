import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom"
import { BottomNav, NavBar, Sidebar } from './Components/Components';

import { Account, Address, Community, Health, Mealplanner } from './Pages/Page';
import {Home, Shop, BritishBrands, SubscriptionAndRewards, ContactUs } from './Pages/Page'

function App() {
  return (
    <div className=' relative max-h-screen box-border '>
      <BrowserRouter >
        <NavBar/>
          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/Shop' element={<Shop />} />
            <Route path='/BritishBrands' element={<BritishBrands />} />
            <Route path='/SubscriptionAndRewards' element={<SubscriptionAndRewards />} />
            <Route path='/ContactUs' element={<ContactUs />} />
          </Routes>
        <Sidebar>
          <Routes>
            <Route path='/' element={<Account/>} />
            <Route path='/address' element={<Address/>} />
            <Route path='/health' element={<Health/>} />
            <Route path='/meal_planner' element={<Mealplanner/>} />
            <Route path='/community' element={<Community/>} />
          </Routes>
        </Sidebar>
        <BottomNav/>
      </BrowserRouter>
    </div>
  );
}

export default App;
