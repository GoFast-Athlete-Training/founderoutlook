import { Link, NavLink, Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import FounderDashboard from './pages/FounderDashboard'
import PersonalRoadmap from './pages/PersonalRoadmap'
import GtmRoadmap from './pages/GtmRoadmap'
import ProductRoadmap from './pages/ProductRoadmap'
import MyCRM from './pages/MyCRM'
import { Button } from './components/ui/button'
import { useEffect, useState } from 'react'

function Layout({ children }) {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const root = document.documentElement
    if (isDark) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [isDark])

  return (
    <div className="min-h-screen grid grid-cols-[240px_1fr]">
      <aside className="border-r bg-white dark:bg-zinc-900 dark:text-zinc-100">
        <div className="p-4 border-b">
          <Link to="/" className="font-semibold">FounderOutlook</Link>
        </div>
        <nav className="p-2 space-y-1">
          {[
            { to: '/', label: 'Dashboard' },
            { to: '/personal', label: 'Personal Roadmap' },
            { to: '/gtm', label: 'GTM Roadmap' },
            { to: '/product', label: 'Product Roadmap' },
            { to: '/crm', label: 'My CRM' },
          ].map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `block rounded-md px-3 py-2 text-sm ${isActive ? 'bg-zinc-900 text-white' : 'hover:bg-zinc-100'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="p-4 mt-auto">
          <Button variant="outline" className="w-full" onClick={() => setIsDark((v) => !v)}>
            {isDark ? 'Light Mode' : 'Dark Mode'}
          </Button>
        </div>
      </aside>
      <main className="p-6 bg-zinc-50 dark:bg-zinc-950 dark:text-zinc-100">
        <div className="max-w-6xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  )
}

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<FounderDashboard />} />
          <Route path="/personal" element={<PersonalRoadmap />} />
          <Route path="/gtm" element={<GtmRoadmap />} />
          <Route path="/product" element={<ProductRoadmap />} />
          <Route path="/crm" element={<MyCRM />} />
        </Routes>
      </Layout>
    </Router>
  )
}


