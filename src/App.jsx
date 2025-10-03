import { useEffect, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'

// Components
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ScrollToTop from './components/common/ScrollToTop'
import LoadingSpinner from './components/common/LoadingSpinner'

// Pages
import Home from './pages/Home'
import AboutSevaShiksha from './pages/AboutSevaShiksha'
import ChairmanSpeaks from './pages/ChairmanSpeaks'
import OurMentors from './pages/OurMentors'
import StudentOathVideos from './pages/StudentOathVideos'
import CoursesAfter10th from './pages/CoursesAfter10th'
import CoursesAfter12th from './pages/CoursesAfter12th'
import CoursesAfterGraduation from './pages/CoursesAfterGraduation'
import StudentRegistration from './pages/StudentRegistration'
import MembershipRegistration from './pages/MembershipRegistration'
import News from './pages/News'
import Brochure from './pages/Brochure'
import TermsConditions from './pages/TermsConditions'
import PrivacyPolicy from './pages/PrivacyPolicy'
import ContactUs from './pages/ContactUs'

// React.Suspense fallback

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      offset: 100
    })
  }, [])

  return (
    <div className="App">
      <Navbar />
      <main className="min-h-screen">
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-seva-shiksha" element={<AboutSevaShiksha />} />
            <Route path="/chairman-speaks" element={<ChairmanSpeaks />} />
            <Route path="/our-mentors" element={<OurMentors />} />
            <Route path="/student-oath-videos" element={<StudentOathVideos />} />
            <Route path="/courses-after-10th" element={<CoursesAfter10th />} />
            <Route path="/courses-after-12th" element={<CoursesAfter12th />} />
            <Route path="/courses-after-graduation" element={<CoursesAfterGraduation />} />
            <Route path="/student-registration" element={<StudentRegistration />} />
            <Route path="/membership-registration" element={<MembershipRegistration />} />
            <Route path="/news" element={<News />} />
            <Route path="/brochure" element={<Brochure />} />
            <Route path="/terms-conditions" element={<TermsConditions />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App