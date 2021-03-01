const app = require("./app")
const clientApp = require("./clientApp")
const config = require('config');

app.listen(config.get('server.port'), () => {
  console.log(`API listening at http://localhost:${config.get('server.port')}`)
})

clientApp.listen(8081, () => {
  console.log(`SPA listening at http://localhost:8081}`)
})