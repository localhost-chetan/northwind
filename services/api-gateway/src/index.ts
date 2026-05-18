import { Hono } from 'hono'

const app = new Hono()
	.get('/', (c) => {
		return c.text("Hello API Gateway!")
	})

export default {
	fetch: app.fetch,
	port: process.env.PORT ?? 8080
}
