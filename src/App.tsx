import React from 'react';
import './App.css';
import CalendarHeader from './containers/organisms/Header/CalendarHeader';
import CalendarBoard from './containers/organisms/Board/CalendarBoard';
import WeekdayColumn from './containers/organisms/Wday/WeekdayColumn';

function App() {
  return (
    <div className="App">
      <CalendarHeader />
      <WeekdayColumn />
      <CalendarBoard />
    </div>
  );
}

export default App;
