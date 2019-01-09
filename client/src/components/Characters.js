import React from 'react';

export default (props) => {
  console.log(props);
  return (
    props.characters.map(character => {
      return (
        <div>
          <h1>{character.name}</h1>
          <h1>{character.height}</h1>
          <h1>{character.weight}</h1>
        </div>
      )
    })
  )
}