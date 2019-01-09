import React from 'react';
import axios from 'axios';

export default class Character extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      character: {}
    }
  }

  async componentDidMount() {
    let {data} = await axios.get('/characters/'+this.props.match.params.id);
    this.setState({character: data});
  }

  render() {
    const character = this.state.character;
    return (
      <div>
        <h1>{character.name}</h1>
        <h1>{character.height}</h1>
        <h1>{character.mass}</h1>
        <h1>{character.hair_color}</h1>
        <h1>{character.skin_color}</h1>
        <h1>{character.eye_color}</h1>
      </div>
    )
  }
}