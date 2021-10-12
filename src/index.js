const express = require('express');
const cors = require('cors');
const movies = require('./data/movies.json');
// create and config server
const server = express();
server.use(cors());
server.use(express.json());

// init express aplication
const serverPort = 4000;
server.listen(serverPort, () => {});
server.get('/movies', (req, res) => {
  //console.log('Query param FilterByGender:', req.query.genderFilterParam);
  //const genderFilter = req.query.genderFilterParam;
  const response = {
    success: true,
    movies,
  };
  res.json(response);
});
