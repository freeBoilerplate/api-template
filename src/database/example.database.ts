import { exampleModel } from './models/example.model'

export const findAllExamples = async () => {
	const data = await exampleModel.find({})
	console.log(data)
	return data
}
