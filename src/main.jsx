
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Blog from './Routes/BlogPage.jsx'
import Create from './Routes/CreateEventsPage.jsx'
import Help from './Routes/HelpCentrePage.jsx'
import Local from './Routes/LocalEventsPage.jsx'




ReactDOM.createRoot(document.getElementById('root')).render(
  
  <BrowserRouter> 
    <Routes>
      <Route path='/' element={<App/> } />
      <Route path='/blog' element={<Blog/> } />
      <Route path='/create' element={<Create/> } />
      <Route path='/help' element={<Help/> } />
      <Route path='/local' element={<Local/> } />
    </Routes>
  </BrowserRouter>
)
