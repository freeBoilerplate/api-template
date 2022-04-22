import { Request, Response, Router } from 'express'
const router = Router()

import * as ExampleLogic from '../../logic/example.logic'

router.get('/', async (req: Request, res: Response) => {
	const data: any[] = await ExampleLogic.getExample()
	if (data) {
		res.status(200).json(data)
	}
})

export default router
