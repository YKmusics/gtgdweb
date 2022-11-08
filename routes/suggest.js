module.exports = {
  "route": "/suggest",
  "run": (app, client, req, res) => {
    res.render("suggest", {"navtitle": "GrowDarken - Suggestion form"})
  }
}