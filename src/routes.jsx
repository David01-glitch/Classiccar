import Layout from './Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Blog from './pages/Blog.jsx'
import Community from './pages/Community.jsx'
import Contact from './pages/Contact.jsx'
import ClassicRestorations from './pages/ClassicRestorations.jsx'
import Route66 from './pages/Route66.jsx'
import VintageGarages from './pages/VintageGarages.jsx'
import MuscleCarHistory from './pages/MuscleCarHistory.jsx'
import CarShowGuides from './pages/CarShowGuides.jsx'
import RestorationTools from './pages/RestorationTools.jsx'
import Privacy from './pages/legal/Privacy.jsx'
import Terms from './pages/legal/Terms.jsx'
import Refund from './pages/legal/Refund.jsx'
import NotFound from './pages/NotFound.jsx'

export const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'blog', element: <Blog /> },
      { path: 'community', element: <Community /> },
      { path: 'contact', element: <Contact /> },
      { path: 'classic-restorations', element: <ClassicRestorations /> },
      { path: 'route66-roadtrips', element: <Route66 /> },
      { path: 'vintage-garages', element: <VintageGarages /> },
      { path: 'muscle-car-history', element: <MuscleCarHistory /> },
      { path: 'car-show-guides', element: <CarShowGuides /> },
      { path: 'restoration-tools', element: <RestorationTools /> },
      { path: 'legal/privacy', element: <Privacy /> },
      { path: 'legal/terms', element: <Terms /> },
      { path: 'legal/refund', element: <Refund /> },
      { path: '404', element: <NotFound /> },
      { path: '*', element: <NotFound /> }
    ]
  }
]

// Routes that vite-react-ssg should pre-render to static HTML.
export const ssgRoutes = [
  '/',
  '/about',
  '/blog',
  '/community',
  '/contact',
  '/classic-restorations',
  '/route66-roadtrips',
  '/vintage-garages',
  '/muscle-car-history',
  '/car-show-guides',
  '/restoration-tools',
  '/legal/privacy',
  '/legal/terms',
  '/legal/refund',
  '/404'
]
