import React, { Component, Fragment } from 'react';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import Button from '@material-ui/core/Button';

const styles = {

}

class PlayerOnePanel extends Component {
  constructor(props){
    super(props);

    this.state = {
      score: 8000
    }
  }
  render() {
    return (
      <Fragment>
        <Paper elevation={1}>
          <Typography variant="h5" component="h3">
            {this.state.score}
          </Typography>
          
        </Paper>
      </Fragment>
    )
  }
}

export default PlayerOnePanel
