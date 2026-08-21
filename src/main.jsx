import { ViteReactSSG } from 'vite-react-ssg'
import App from './App.jsx'
import PrivacyPolicy from './components/PrivacyPolicy.jsx'
import AiAutomationPage from './components/pages/AiAutomationPage.jsx'
import PaidAdvertisingPage from './components/pages/PaidAdvertisingPage.jsx'
import WebsitesPage from './components/pages/WebsitesPage.jsx'
import SocialMediaPage from './components/pages/SocialMediaPage.jsx'
import './index.css'

export const createRoot = ViteReactSSG({
  routes: [
    { path: '/', element: <App /> },
    { path: '/privacy', element: <PrivacyPolicy /> },
    { path: '/services/ai-automation',   element: <AiAutomationPage /> },
    { path: '/services/paid-advertising', element: <PaidAdvertisingPage /> },
    { path: '/services/websites',         element: <WebsitesPage /> },
    { path: '/services/social-media',     element: <SocialMediaPage /> },
  ],
})
