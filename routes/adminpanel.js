module.exports = {
	route: "/adminpanel",
	run: async (app, client, req, res) => {
		res.render("adminpanel", {navtitle: "Admin Panel — Log in"})
	}
}