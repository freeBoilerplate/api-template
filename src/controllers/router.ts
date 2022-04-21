import { Router } from 'express'
const router = Router()

// Router Imports
import exampleRouter from './example/example.routing'

// Router Utilizations
router.use('/example', exampleRouter)

export default router
