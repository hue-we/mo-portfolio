import { useEffect, useState } from 'react'
import { api } from '../lib/api.js'
import ProjectForm from './ProjectForm.jsx'

export default function AdminDashboard({ token, onLogout }) {
  const [projects, setProjects] = useState([])
  const [editing, setEditing] = useState(null) // null | 'new' | project object
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  function load() {
    setLoading(true)
    api.getProjects()
      .then(setProjects)
      .catch(() => setError('Could not reach the API.'))
      .finally(() => setLoading(false))
  }

  useEffect(load, [])

  async function handleSave(data) {
    try {
      if (editing === 'new') {
        await api.createProject(token, data)
      } else {
        await api.updateProject(token, editing._id, data)
      }
      setEditing(null)
      load()
    } catch (err) {
      setError(err.message)
    }
  }

  async function handleDelete(id) {
    if (!confirm('Delete this project?')) return
    await api.deleteProject(token, id)
    load()
  }

  return (
    <div className="min-h-screen bg-ink px-6 md:px-10 py-10 font-body">
      <div className="flex items-center justify-between mb-10">
        <h1 className="font-display font-bold uppercase text-2xl text-bone">Projects</h1>
        <div className="flex gap-4 font-mono text-xs uppercase tracking-widest">
          <a href="/" className="text-muted hover:text-bone transition-colors">View site</a>
          <button onClick={onLogout} className="text-muted hover:text-gold transition-colors">Log out</button>
        </div>
      </div>

      {error && <p className="font-mono text-xs text-red-400 mb-6">{error}</p>}

      {editing && (
        <ProjectForm
          initial={editing === 'new' ? null : editing}
          onSave={handleSave}
          onCancel={() => setEditing(null)}
        />
      )}

      {!editing && (
        <button
          onClick={() => setEditing('new')}
          className="font-mono text-xs uppercase tracking-widest border border-gold text-gold px-5 py-2 mb-8 hover:bg-gold hover:text-ink transition-colors"
        >
          + Add project
        </button>
      )}

      {loading ? (
        <p className="font-mono text-xs text-muted">Loading…</p>
      ) : (
        <div className="flex flex-col">
          {projects.map((p) => (
            <div key={p._id} className="flex items-center justify-between gap-4 py-4 border-b border-line">
              <div>
                <p className="text-bone">{p.title}</p>
                <p className="font-mono text-xs text-muted">{p.year} — {(p.tags || []).join(', ')}</p>
              </div>
              <div className="flex gap-3 font-mono text-xs uppercase tracking-widest shrink-0">
                <button onClick={() => setEditing(p)} className="text-muted hover:text-gold transition-colors">Edit</button>
                <button onClick={() => handleDelete(p._id)} className="text-muted hover:text-red-400 transition-colors">Delete</button>
              </div>
            </div>
          ))}
          {!projects.length && <p className="font-mono text-xs text-muted">No projects yet.</p>}
        </div>
      )}
    </div>
  )
}
