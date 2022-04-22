// Initialize MongoDB Connection
import { mongoConnect } from './packages/mongodb/index'

export const startup = (app: any) => {
	const port = process.env.PORT

	// Setup server
	mongoConnect()

	app.listen(port, () => {
		console.log(`App listening on port: ${port}`)
	})
}
