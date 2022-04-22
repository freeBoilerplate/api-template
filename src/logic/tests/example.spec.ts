import { getExample } from '../example.logic'
import * as exampleDatabase from '../../database/example.database'

describe('Server Endpoints', () => {
	it('GET /api/example should return successfully', async () => {
		const addMock = jest.spyOn(exampleDatabase, 'findAllExamples')
		addMock.mockImplementation(
			() => new Promise(resolve => resolve([{ example: 'test' }]))
		)
		expect(await getExample()).toEqual([{ example: 'test' }])
	})
})
