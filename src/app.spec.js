const oldENV = process.env.NODE_ENV
process.env.NODE_ENV = 'development'

const server = require('../src/app.ts')
const supertest = require('supertest')
const requestWithSupertest = supertest(server)

describe('Server Endpoints', () => {
	it('GET / should return successfully', async () => {
		const res = await requestWithSupertest.get('/')
		expect(res.status).toEqual(200)
		expect(res.type).toEqual(expect.stringContaining('application/json'))
		console.log(res.body)
		expect(res.body).toEqual('Service up!')
	})
})
