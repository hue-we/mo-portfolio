import { useState } from 'react'

const empty = { title: '', description: '', year: '', tags: '', link: '', slug: '' }

export default function ProjectForm({ initial, onSave, onCancel }) {
  const [form, setForm] = useState(initial ? { ...initial, tags: initial.tags?.join(', ') || '' } : empty)

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    onSave({
      ...form,
      tags: form.tags.split(',').map((t) => t.trim()).filter(Boolean)
    })
  }

  return (
    <form onSubmit={handleSubmit} className="border border-line p-6 mb-8 font-body">
      <div className="grid gap-4">
        <Field label="Title" value={form.title} onChange={(v) => update('title', v)} required />
        <Field label="Description" value={form.description} onChange={(v) => update('description', v)} textarea />
        <div className="grid grid-cols-2 gap-4">
          <Field label="Year" value={form.year} onChange={(v) => update('year', v)} />
          <Field label="Link (optional)" value={form.link} onChange={(v) => update('link', v)} />
        </div>
        <Field label="Tags (comma separated)" value={form.tags} onChange={(v) => update('tags', v)} />
        <div>
          <Field
            label="Case study slug (optional)"
            value={form.slug}
            onChange={(v) => update('slug', v)}
          />
          <p className="font-mono text-[11px] text-muted mt-1">
            Only works if a matching entry exists in client/src/data/caseStudies.js — leave blank to just link out via the URL field instead.
          </p>
        </div>
      </div>
      <div className="flex gap-3 mt-6">
        <button type="submit" className="font-mono text-xs uppercase tracking-widest bg-gold text-ink px-5 py-2 hover:opacity-90">
          Save
        </button>
        <button type="button" onClick={onCancel} className="font-mono text-xs uppercase tracking-widest border border-line text-muted px-5 py-2 hover:text-bone">
          Cancel
        </button>
      </div>
    </form>
  )
}

function Field({ label, value, onChange, textarea, required }) {
  const Comp = textarea ? 'textarea' : 'input'
  return (
    <label className="block">
      <span className="font-mono text-xs text-muted uppercase tracking-widest">{label}</span>
      <Comp
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        rows={textarea ? 3 : undefined}
        className="mt-1 w-full bg-transparent border-b border-line focus:border-gold outline-none py-2 text-bone text-sm transition-colors"
      />
    </label>
  )
}
