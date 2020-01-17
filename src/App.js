import React from 'react';


import TaskList from './tasks/TaskList'
import NewTask from './tasks/NewTask'

function App() {
  return (
    <div className="App">
      <NewTask />
      <hr />
      <TaskList />
    </div>
  );
}

export default App;
