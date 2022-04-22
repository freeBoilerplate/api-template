const oldENV = process.env.NODE_ENV
process.env.NODE_ENV = 'development'

import server = require('./index')
import supertest = require('supertest')
const requestWithSupertest = supertest(server)

describe('Server Endpoints', () => {
	it('GET / should return successfully', async () => {
		const res = await requestWithSupertest.get('/')
		expect(res.status).toEqual(200)
		expect(res.type).toEqual(expect.stringContaining('application/json'))
		expect(res.body).toEqual('Service up!')
	})
})
