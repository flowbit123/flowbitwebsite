import { ViteReactSSG } from 'vite-react-ssg'
import App from './App.jsx'
import PrivacyPolicy from './components/PrivacyPolicy.jsx'
import './index.css'

export const createRoot = ViteReactSSG({
  routes: [
    { path: '/', element: <App /> },
    { path: '/privacy', element: <PrivacyPolicy /> },
  ],
})
