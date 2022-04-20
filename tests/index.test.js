const server = require('../src/index.ts')
const supertest = require('supertest')
const requestWithSupertest = supertest(server)

describe('Server Endpoints', () => {
    it('GET /ping should return pong', async () => {
        const res = await requestWithSupertest.get('/ping')
        expect(res.status).toEqual(200)
        expect(res.type).toEqual(expect.stringContaining('json'))
        expect(res.body).toHaveProperty('data')
        expect(res.body.data).toEqual('pong')
    })
})
