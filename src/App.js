import React from 'react';
import Emotion from './components/Emotion';
import Physical from './components/Physical';
import PersonalGoal from './components/PersonalGoal';
import './App.css';

// Bring in the components to app.js which is the main component

class App extends React.Component {

  // add state

  state = {
    wellbeing: [
      {
        timestamp: '',
        emotion_note: '',
        emotion: ''
      },
      {
        timestamp: '',
        physical_note: '',
        physical: ''
      },
      {
        timestamp: '',
        goal_note: '',
        goal: ''
      }
    ]
  }
  render() {
    console.log(this.state.wellbeing);
    return (
      <div className="App">
        <p>this is placeholder code for practice</p>

        <div>
          <Emotion />
          <Physical />
          <PersonalGoal />
        </div>

        <div className="submit">
          <button>Submit</button>
        </div>
      </div>
    );
  }
}

export default App;
