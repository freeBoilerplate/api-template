import server = require('../../index')
import supertest = require('supertest')
const requestWithSupertest = supertest(server)

describe('Server Endpoints', () => {
	it('GET /api/example should return successfully', async () => {
		const res = await requestWithSupertest.get('/api/example')
		expect(res.status).toEqual(200)
		expect(res.type).toEqual(expect.stringContaining('application/json'))
		expect(res.body).toEqual('Example')
	})
})
