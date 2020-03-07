import React from 'react';
import './App.css';
import Rooms from './room/room.component'
import AppContext from './context/AppContext'
import RoomContext from './room/room.context'


function App() {
  return (
    <div className="App">
      <RoomContext.Provider value={{ name: '', floor: '', hasExecuted: false }}>
        <Rooms />
      </RoomContext.Provider>

    </div>
  );
}

export default App;
