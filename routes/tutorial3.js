module.exports = {
	route: "/data/tutorial3",
	run: async (app, client, req, res) => {
		res.sendFile("/home/runner/gtgd/tutorial3.jpg")
	}
}