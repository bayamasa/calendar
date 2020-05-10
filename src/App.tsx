import React from 'react';
import './App.css';
import CalendarHeader from './containers/organisms/Header/CalendarHeader';
import CalendarBoard from './containers/organisms/CalendarBoard'
import WeekdayColumn from './components/Calendar/atoms/Wday/WeekdayColumn'

function App() {
  return (
    <div className="App">
      <CalendarHeader/>
      <WeekdayColumn/>
      <CalendarBoard/>
    </div>
  );
}

export default App;
