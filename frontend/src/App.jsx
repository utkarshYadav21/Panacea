
import './App.css'
import Header from './components/Header.jsx'
import Body from './components/Body.jsx'
import About from './components/About.jsx'
import Orders from './components/Orders.jsx'
import ContactUs from './components/ContactUs.jsx'
import Footer from './components/Footer.jsx'
import SaleCardDetail from './components/SaleCardDetail.jsx'

import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './components/Login.jsx'
import Signin from './components/Signin.jsx'

function App() {
  

  return (
    <div className='app'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Body />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/orders' element={<Orders />}/>
          <Route path='/contactus' element={<ContactUs />}/>
          <Route path='/details/:title' element={<SaleCardDetail />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/signin' element={<Signin />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App
