import _ from 'lodash'
import React from 'react'
import { Grid } from 'semantic-ui-react'


const weekday : string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const weekdayNumber = 7;

const column = _.times(7, (i) => (
  <Grid.Column key={i}>
    {weekday[i]}
  </Grid.Column>
))

const WeekdayColumn = () => <Grid columns={weekdayNumber} padded> {column}</Grid>

export default WeekdayColumn
