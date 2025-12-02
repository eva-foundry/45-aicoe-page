import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { I18nProvider } from './i18n/I18nContext'
import { GCHeader } from './components/gc/GCHeader'
import { GCFooter } from './components/gc/GCFooter'
import { EVAAskMe } from './components/EVAAskMe'
import { HomePage } from './pages/HomePage'
import { ProgramOverviewPage } from './pages/ProgramOverviewPage'
import { HowItWorksPage } from './pages/HowItWorksPage'
import { ServicesPage } from './pages/ServicesPage'
import { IntakeOptimizationPage } from './pages/IntakeOptimizationPage'
import { UseCasePage } from './pages/UseCasePage'
import { RoadmapPage } from './pages/RoadmapPage'
import { ContactPage } from './pages/ContactPage'

function App() {
  return (
    <I18nProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col bg-background">
          <GCHeader />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/program-overview" element={<ProgramOverviewPage />} />
              <Route path="/how-it-works" element={<HowItWorksPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/intake-optimization" element={<IntakeOptimizationPage />} />
              <Route path="/use-case" element={<UseCasePage />} />
              <Route path="/roadmap" element={<RoadmapPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </div>
          <GCFooter />
          <EVAAskMe />
        </div>
      </BrowserRouter>
    </I18nProvider>
  )
}

export default App