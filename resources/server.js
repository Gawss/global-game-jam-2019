const express = require('express'); // npm install --save express@4.15.2
const bodyParser = require('body-parser');

function server (SERVER_PORT) {
  const app = express();

  app.use(express.static('resources'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  const server = app.listen(process.env.PORT || SERVER_PORT, () => {
    console.log('Express server listening on port %d in %s mode', server.address().port, app.settings.env)
    console.log('Server activated on: ', __dirname)
  });

  app.get('/', (req, res) => {

    console.log('APP GET /');
    // res.sendFile('TCP_client_control.html', {'root': __dirname})
    res.send('Ok');

  });
}
module.exports = {
  server
}