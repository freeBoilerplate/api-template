import { Router } from 'express'
const router = Router()

// Router Imports
import ExampleRouter from './api/example.routes'

// Router Utilizations
router.use('/example', ExampleRouter)

export default router
