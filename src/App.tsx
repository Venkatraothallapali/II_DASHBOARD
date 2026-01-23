import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ValueProposition from './components/ValueProposition'
import ProductsShowcase from './components/ProductsShowcase'
import CustomerStories from './components/CustomerStories'
import Footer from './components/Footer'
import Veritascribe from './components/Veritascribe'
import GMPCompliance from './components/GMPCompliance'
import ComplaintSiteSearch from './components/ComplaintSiteSearch'
import QualityTraining from './components/QualityTraining'
import Blog from './components/Blog'
import BlogArticle from './components/BlogArticle'
import ECTDAI from './components/ECTDAI'
import VideoCreationService from './components/VideoCreationService'
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsOfUse from './components/TermsOfUse'
import ScheduleDemo from './components/ScheduleDemo'
import ECTDDemo from './components/ECTDDemo'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="App">
            <Navbar />
            <ValueProposition />
            <ProductsShowcase />
            <CustomerStories />
            <Footer />
          </div>
        } />
        <Route path="/veritascribe" element={
          <div className="App">
            <Navbar />
            <Veritascribe />
          </div>
        } />
        <Route path="/gmp-compliance" element={
          <div className="App">
            <Navbar />
            <GMPCompliance />
          </div>
        } />
        <Route path="/complaint-site-search" element={
          <div className="App">
            <Navbar />
            <ComplaintSiteSearch />
          </div>
        } />
        <Route path="/quality-training" element={
          <div className="App">
            <Navbar />
            <QualityTraining />
          </div>
        } />
        <Route path="/blog" element={
          <div className="App">
            <Navbar />
            <Blog />
            <Footer />
          </div>
        } />
        <Route path="/blog/:id" element={
          <div className="App">
            <Navbar />
            <BlogArticle />
            <Footer />
          </div>
        } />
        <Route path="/ectd-ai" element={
          <div className="App">
            <Navbar />
            <ECTDAI />
          </div>
        } />
        <Route path="/video-creation-service" element={
          <div className="App">
            <Navbar />
            <VideoCreationService />
          </div>
        } />
        <Route path="/privacy-policy" element={
          <div className="App">
            <Navbar />
            <PrivacyPolicy />
            <Footer />
          </div>
        } />
        <Route path="/terms-of-use" element={
          <div className="App">
            <Navbar />
            <TermsOfUse />
            <Footer />
          </div>
        } />
        <Route path="/schedule-demo" element={
          <div className="App">
            <ScheduleDemo />
          </div>
        } />
        <Route path="/ectd-ai-demo" element={
          <div className="App">
            <ECTDDemo />
          </div>
        } />
      </Routes>
    </Router>
  )
}

export default App
