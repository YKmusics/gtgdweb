module.exports = {
  "route": "/",
  "run": (app, client, req, res) => {
    res.render("index", {"navtitle": "GrowDarken"})
  }
}