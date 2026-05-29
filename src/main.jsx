import { ViteReactSSG } from 'vite-react-ssg'
import { routes, ssgRoutes } from './routes.jsx'
import './index.css'

export const createRoot = ViteReactSSG({ routes })

export const includedRoutes = () => ssgRoutes
