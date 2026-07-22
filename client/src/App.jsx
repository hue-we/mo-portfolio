import { useState, useEffect } from 'react'
import Portfolio from './Portfolio.jsx'
import AdminLogin from './admin/AdminLogin.jsx'
import AdminDashboard from './admin/AdminDashboard.jsx'
import CaseStudy from './components/CaseStudy.jsx'

export default function App() {
  const [path, setPath] = useState(window.location.pathname)
  const [token, setToken] = useState(localStorage.getItem('mo_admin_token') || '')

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname)
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  if (path.startsWith('/work/')) {
    const slug = path.replace('/work/', '').replace(/\/$/, '')
    return <CaseStudy slug={slug} />
  }

  if (path.startsWith('/admin')) {
    if (!token) {
      return <AdminLogin onLogin={(t) => { localStorage.setItem('mo_admin_token', t); setToken(t) }} />
    }
    return (
      <AdminDashboard
        token={token}
        onLogout={() => { localStorage.removeItem('mo_admin_token'); setToken('') }}
      />
    )
  }

  return <Portfolio />
}
