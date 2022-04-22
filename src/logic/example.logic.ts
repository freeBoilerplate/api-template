import * as ExampleDatabase from '../database/example.database'

const getExample = async () => {
	return await ExampleDatabase.findAllExamples()
}

export { getExample }
