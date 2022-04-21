const server = require('../../app')
const supertest = require('supertest')
const requestWithSupertest = supertest(server)

describe('Server Endpoints', () => {
	it('GET /api/example should return successfully', async () => {
		const res = await requestWithSupertest.get('/api/example')
		expect(res.status).toEqual(200)
		expect(res.type).toEqual(expect.stringContaining('application/json'))
		console.log(res.body)
		expect(res.body).toEqual('Example')
	})
})
