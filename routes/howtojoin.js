module.exports = {
	route: "/howtojoin",
	run: async (app, client, req, res) => {
		var paneldata = app.db.get("paneldata")
		res.render("howtojoin", {navtitle:"How to Join", paneldata: paneldata})
	}
}