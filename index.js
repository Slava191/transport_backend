const app = require("./app")
const config = require('config');

app.listen(config.get('server.port'), () => {
  console.log(`Example app listening at http://localhost:${config.get('server.port')}`)
})