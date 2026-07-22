const BASE = import.meta.env.VITE_API_URL || '/api'

async function request(path, options = {}) {
  const res = await fetch(`${BASE}${path}`, {
    headers: { 'Content-Type': 'application/json', ...(options.headers || {}) },
    ...options
  })
  if (!res.ok) {
    const body = await res.json().catch(() => ({}))
    throw new Error(body.message || `Request failed: ${res.status}`)
  }
  if (res.status === 204) return null
  return res.json()
}

export const api = {
  getProjects: () => request('/projects'),
  login: (password) => request('/auth/login', { method: 'POST', body: JSON.stringify({ password }) }),
  createProject: (token, data) =>
    request('/projects', { method: 'POST', headers: { Authorization: `Bearer ${token}` }, body: JSON.stringify(data) }),
  updateProject: (token, id, data) =>
    request(`/projects/${id}`, { method: 'PUT', headers: { Authorization: `Bearer ${token}` }, body: JSON.stringify(data) }),
  deleteProject: (token, id) =>
    request(`/projects/${id}`, { method: 'DELETE', headers: { Authorization: `Bearer ${token}` } })
}
