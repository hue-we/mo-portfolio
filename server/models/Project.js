import mongoose from 'mongoose'

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, default: '' },
    year: { type: String, default: '' },
    tags: { type: [String], default: [] },
    liveLink: { type: String, default: '' },
    caseStudyPdf: { type: String, default: '' },
    slug: { type: String, default: '' },
    order: { type: Number, default: 0 }
  },
  { timestamps: true }
)

export default mongoose.model('Project', projectSchema)
