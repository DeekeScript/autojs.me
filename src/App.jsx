import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Guide from './pages/Guide'
import ApiV1 from './pages/ApiV1'
import ApiV2 from './pages/ApiV2'
import ApiV1Doc from './pages/ApiV1Doc'
import ApiV2Doc from './pages/ApiV2Doc'
import Links from './pages/Links'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/guide" element={<Guide />} />
            <Route path="/api-v1" element={<ApiV1 />} />
            <Route path="/api-v1/:section" element={<ApiV1Doc />} />
            <Route path="/api-v2" element={<ApiV2 />} />
            <Route path="/api-v2/:section" element={<ApiV2Doc />} />
            <Route path="/links" element={<Links />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

