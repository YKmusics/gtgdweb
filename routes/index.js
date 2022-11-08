module.exports = async (app, client) => {
  const fs = require("fs")
  var files = await fs.readdirSync(__dirname).filter(file => file !== "index.js")
  files.forEach(file => {
    
    var data = require(__dirname + `/${file}`)
    console.log("+ Loading route " + data.route)
    app.get(data.route, (req,res,next) => {
      data.run(app,client,req,res,next)
    })
    console.log("- Loaded successfully")
  })
  
}