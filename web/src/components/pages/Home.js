import React, { Component } from 'react'
import { Button } from 'react-foundation'

import { Link } from 'react-router-dom'

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1>Home</h1>

        <Link to="/details"><Button>Details</Button></Link>
      </div>
    );
  }
}