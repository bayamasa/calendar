import React, { FC } from 'react';
import DayContainer from 'components/Calendar/molecules/DayContainer';
import CustomBoard from './CustomBoard';
import _ from 'lodash';

const weekColumns = _.times(7, (i) => <DayContainer />);

const weekRow = _.times(5, (i) => <CustomBoard>{weekColumns}</CustomBoard>);

const CalendarBoard: FC = () => {
  return <>{weekRow}</>;
};

export default CalendarBoard;
