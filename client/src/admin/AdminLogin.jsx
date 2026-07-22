import { useState } from 'react'
import { api } from '../lib/api.js'

export default function AdminLogin({ onLogin }) {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setBusy(true)
    try {
      const { token } = await api.login(password)
      onLogin(token)
    } catch (err) {
      setError('Wrong password.')
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="min-h-screen bg-ink flex items-center justify-center px-6 font-body">
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <p className="font-mono text-xs text-muted uppercase tracking-widest mb-6">admin --login</p>
        <input
          type="password"
          autoFocus
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full bg-transparent border-b border-line focus:border-gold outline-none py-3 text-bone font-mono text-sm transition-colors"
        />
        {error && <p className="mt-3 font-mono text-xs text-red-400">{error}</p>}
        <button
          type="submit"
          disabled={busy}
          className="mt-8 w-full font-mono text-xs uppercase tracking-widest border border-gold text-gold py-3 hover:bg-gold hover:text-ink transition-colors disabled:opacity-50"
        >
          {busy ? 'Checking…' : 'Sign in'}
        </button>
      </form>
    </div>
  )
}
