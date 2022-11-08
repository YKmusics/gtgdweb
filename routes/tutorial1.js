module.exports = {
	route: "/data/tutorial1",
	run: async (app, client, req, res) => {
		res.sendFile("/home/runner/gtgd/tutorial1.jpg")
	}
}