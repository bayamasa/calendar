import React from 'react';
import './App.css';
import CalendarHeader from './containers/organisms/Header/CalendarHeader';
import CalendarBoard from './containers/organisms/CalendarBoard'

function App() {
  return (
    <div className="App">
      <CalendarHeader/>
      <CalendarBoard/>
    </div>
  );
}

export default App;
