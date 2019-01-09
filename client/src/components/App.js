import React, {Component} from 'react';
import Character from './Character';
import Characters from './Characters';
import { BrowserRouter, Route } from 'react-router-dom'
import axios from 'axios';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      characters: []
    }
  }

  async componentDidMount() {
    let {data} = await axios.get('/characters');
    this.setState({characters: data});
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path='/' component={() => <Characters characters={this.state.characters} />} />
          <Route path='/characters/:id' component={Character} />
        </div>
      </BrowserRouter>
    )
  }
}