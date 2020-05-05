import React, { FC } from 'react';
import Date from '../../components/Calendar/atoms/Day/Date';
import DayContainer from '../../components/Calendar/atoms/Day/DayContainer';
import Plan from '../../components/Calendar/atoms/Day/Plan';
import CustomBoard from './CustomBoard';

const CalendarBoard: FC = () => {
  return (
    <>
      <CustomBoard>
        <DayContainer>
          <Date>hello</Date>
          <Plan>test</Plan>
        </DayContainer>
      </CustomBoard>
    </>
  );
};

export default CalendarBoard;
