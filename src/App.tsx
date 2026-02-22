import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FluentProvider } from '@fluentui/react-components'

import { I18nProvider } from './i18n/I18nContext'
import { gcTheme } from './lib/fluent-theme'
import { FluentHeader } from './components/fluent/FluentHeader'
import { FluentFooter } from './components/fluent/FluentFooter'
import { EVAAskMe } from './components/EVAAskMeFluent'
import { HomePage } from './pages/HomePageFluent'
import { ProgramOverviewPage } from './pages/ProgramOverviewPage'
import { HowItWorksPage } from './pages/HowItWorksPage'
import { ServicesPage } from './pages/ServicesPage'
import { IntakeOptimizationPage } from './pages/IntakeOptimizationPage'
import { UseCasePage } from './pages/UseCasePage'
import { RoadmapPage } from './pages/RoadmapPage'
import { ContactPage } from './pages/ContactPage'

function App() {
  return (
    <FluentProvider theme={gcTheme}>
      <I18nProvider>
        <BrowserRouter>
          <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#FFFFFF' }}>
            <FluentHeader />
            <div style={{ flex: 1 }}>
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
            <FluentFooter />
            <EVAAskMe />
          </div>
        </BrowserRouter>
      </I18nProvider>
    </FluentProvider>
  )
}

export default App