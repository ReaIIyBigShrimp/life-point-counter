import React, { Component, Fragment } from 'react';

import Grid from '@material-ui/core/Grid';

import PlayerOnePanel from './components/PlayerOnePanel.js';

class App extends Component {
  render() {
    return (
      <Grid
      container
      direction="row"
      justify="center"
      alignItems="center" 
      >
        <Grid item>
          <PlayerOnePanel />
        </Grid>
      </Grid>
      
    )
  }
}

export default App;
