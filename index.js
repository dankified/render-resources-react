//require dependencies
const express = require('express');
const axios = require('axios');

//create express app
const app = express();

//middleware function that will return static assets for every request made to the server
app.use(express.static(`${__dirname}/client/build`));

app.get('/characters', async (req, res) => {
  let {data: characters} = await axios.get('https://swapi.co/api/people');
  characters = characters.results.map(char => {
    return {name: char.name, height: char.height, weight: char.mass}
  })
  res.json(characters);
})

app.get('/characters/:id', async (req, res) => {
  const id = req.params.id;
  let {data: character} = await axios.get('https://swapi.co/api/people/'+id);
  res.json(character);
})

//listen on static port
app.listen(5000, () => console.log('listening on port 5000'));