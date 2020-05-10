import React, { FC } from 'react';
import Date from '../../components/Calendar/atoms/Day/Date';
import DayContainer from '../../components/Calendar/atoms/Day/DayContainer';
import Plan from '../../components/Calendar/atoms/Day/Plan';
import CustomBoard from './CustomBoard';
import _ from 'lodash'


const weekColumns = _.times(7, (i) => (
  <DayContainer>
  <Date>hello</Date>
  <Plan>test</Plan>
</DayContainer>
))

const weekRow = _.times(5,
  (i) => (
    <CustomBoard>
   { weekColumns }
    </CustomBoard>
  )
)

const CalendarBoard: FC = () => {
  return (
    <>
      { weekRow }
    </>
  );
};

export default CalendarBoard;
