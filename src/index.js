const express = require('express');
const cors = require('cors');
const movies = require('./data/movies.json');
// create and config server
const server = express();
server.use(cors());
server.use(express.json());

// init express aplication
const serverPort = 4001;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});
server.get('/movies', (req, res) => {
  console.log('Hola');
  const genderFilterParam = req.query.gender;
  console.log('Query params:', req.query.gender);
  const filteredMovies = movies.filter((movie) => {
    if (gender === '') {
      return movie;
    } else {
      return movie.gender === genderFilterParam;
    }
  });

  const response = {
    success: true,
    filteredMovies,
  };
  res.json(response);
});
