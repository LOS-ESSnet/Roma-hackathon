import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import D from 'i18n';
import Select from './select';
import TypeOfHousing from './container';

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      year: '',
    };
    this.handleChange = year => this.setState({ year });
  }

  render() {
    const { year } = this.state;
    return (
      <React.Fragment>
        <Typography variant="h3" color="primary" align="center" className="header">
          {D.typeOfHousingTitle}
        </Typography>
        <Select year={year} handleChange={this.handleChange} />
        {year && <TypeOfHousing year={year} />}
      </React.Fragment>
    );
  }
}
