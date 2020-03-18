require('dotenv').config();
const express = require("express");
const massive = require('massive')
const app = express();

const { SERVER_PORT, CONNECTION_STR} = process.env;
const controller = require('./controller');

app.use(express.json());

massive(CONNECTION_STR).then(db => {
  app.set('db',db);
  console.log('Connected to DB')
  // db.new_planes().then(planes => console.log(planes))
  // .catch(err => console.log(err))

  // db.get_planes().then( planes => console.log( planes))
  // .catch(err => console.log(err))
})


app.get(`/api/planes`, controller.getPlanes);


app.listen(SERVER_PORT, () => {
  console.log(`Server listening on port ${SERVER_PORT}`);
});
