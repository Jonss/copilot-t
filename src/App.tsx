import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './pages/Index';
import About from './pages/About';
import NotFound from './pages/404';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path='/' element={<Index />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </Router>
  )
}



export default App
