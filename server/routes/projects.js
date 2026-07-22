import { Router } from 'express'
import Project from '../models/Project.js'
import { requireAuth } from '../middleware/auth.js'

const router = Router()

// Public: list projects, newest/ordered first
router.get('/', async (req, res) => {
  const projects = await Project.find().sort({ order: 1, createdAt: -1 })
  res.json(projects)
})

// Protected: create
router.post('/', requireAuth, async (req, res) => {
  const project = await Project.create(req.body)
  res.status(201).json(project)
})

// Protected: update
router.put('/:id', requireAuth, async (req, res) => {
  const project = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true })
  if (!project) return res.status(404).json({ message: 'Project not found.' })
  res.json(project)
})

// Protected: delete
router.delete('/:id', requireAuth, async (req, res) => {
  const project = await Project.findByIdAndDelete(req.params.id)
  if (!project) return res.status(404).json({ message: 'Project not found.' })
  res.status(204).end()
})

export default router
