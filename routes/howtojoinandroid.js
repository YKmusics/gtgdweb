module.exports = {
	route: "/howtojoin/android",
	run: async (app, client, req, res) => {
		var paneldata = app.db.get("paneldata")
		res.render("howtojoinandroid", {navtitle: "How to Join — Android", paneldata: paneldata})
	}
}