import React from 'react';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const SelectYear = ({ timePeriods, year, handleChange }) => (
  <Grid container justify="center">
    <FormControl>
      <InputLabel htmlFor="year">Age</InputLabel>
      <Select
        value={year}
        onChange={e => handleChange(e.target.value)}
        inputProps={{
          name: 'year',
          id: 'year',
        }}
      >
        {timePeriods.map(({ value, label }) => (
          <MenuItem key={value} value={value}>
            {label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  </Grid>
);

export default SelectYear;
