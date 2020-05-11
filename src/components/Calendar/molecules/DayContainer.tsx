import React, { FC } from 'react';
import Date from '../atoms/Date';
import DayFrame from '../atoms/DayFrame';
import Plan from '../atoms/Plan';

const DayContainer: FC = () => {
  return (
    <>
      <DayFrame>
        <Date>hello</Date>
        <Plan>plan</Plan>
      </DayFrame>
    </>
  );
};

export default DayContainer;
