module.exports = {
	route: "/data/tutorial2",
	run: async (app, client, req, res) => {
		res.sendFile("/home/runner/gtgd/tutorial2.jpg")
	}
}