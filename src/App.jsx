import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Header from './components/Header'
import Footer from './components/Footer'


function App() {
  return (
    <>
      <Router>
        <Header />  
        <Routes>
          <Route path='/' element={<LandingPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
