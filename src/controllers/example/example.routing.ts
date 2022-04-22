import { Request, Response, Router } from 'express'
const router = Router()

// Action Imports
import getExample from './get.action'

// Routing
router.get('/', async (req: Request, res: Response) => {
	const data: boolean = await getExample()
	if (data) {
		res.status(200).json('Example')
	}
})

export default router
