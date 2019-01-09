//require dependencies
const express = require('express');
const axios = require('axios');

//create express app
const app = express();

//middleware function that will return static assets for every request made to the server
//It would be great if a caching solution was implemented so that the assets do not get sent back on each request.
app.use(express.static(`${__dirname}/client/build`));

//Handler that will get all characters from the swapi api. Will be called from the 'App' component during componentWillMount lifecycle method
app.get('/characters', async (req, res) => {
  let {data: characters} = await axios.get('https://swapi.co/api/people');
  characters = characters.results.map(char => {
    return {name: char.name, height: char.height, weight: char.mass}
  })
  res.json(characters);
})

//Handler that will get a character based on a character id. Will be called from the 'Character' component duringcomponentWillMount lifecycle method
app.get('/characters/:id', async (req, res) => {
  const id = req.params.id;
  let {data: character} = await axios.get('https://swapi.co/api/people/'+id);
  res.json(character);
})

//listen on static port
app.listen(5000, () => console.log('listening on port 5000'));