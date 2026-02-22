import { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FluentProvider } from '@fluentui/react-components'

import { I18nProvider } from './i18n/I18nContext'
import { gcTheme } from './lib/fluent-theme'
import { FluentHeader } from './components/fluent/FluentHeader'
import { FluentFooter } from './components/fluent/FluentFooter'
import { EVAAskMe } from './components/EVAAskMeFluent'
const HomePage = lazy(() => import('./pages/HomePageFluent').then((module) => ({ default: module.HomePage })))
const ProgramOverviewPage = lazy(() => import('./pages/ProgramOverviewPage').then((module) => ({ default: module.ProgramOverviewPage })))
const HowItWorksPage = lazy(() => import('./pages/HowItWorksPage').then((module) => ({ default: module.HowItWorksPage })))
const ServicesPage = lazy(() => import('./pages/ServicesPage').then((module) => ({ default: module.ServicesPage })))
const IntakeOptimizationPage = lazy(() => import('./pages/IntakeOptimizationPage').then((module) => ({ default: module.IntakeOptimizationPage })))
const UseCasePage = lazy(() => import('./pages/UseCasePage').then((module) => ({ default: module.UseCasePage })))
const RoadmapPage = lazy(() => import('./pages/RoadmapPage').then((module) => ({ default: module.RoadmapPage })))
const ContactPage = lazy(() => import('./pages/ContactPage').then((module) => ({ default: module.ContactPage })))

const appLayoutStyle = {
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column' as const,
  backgroundColor: '#FFFFFF',
}

function App() {
  return (
    <FluentProvider theme={gcTheme}>
      <I18nProvider>
        <BrowserRouter>
          <div style={appLayoutStyle}>
            <FluentHeader />
            <div style={{ flex: 1 }}>
              <Suspense fallback={null}>
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
              </Suspense>
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