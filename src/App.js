import React from 'react';
import Emotion from './components/Emotion';
import Physical from './components/Physical';
import PersonalGoal from './components/PersonalGoal';
import './App.css';

// Bring in the components to app.js which is the main component

class App extends React.Component {

  // add state

  state = 
      {
        timestamp: "",
        emotion_note: "",
        emotion: "",
        physical_note: "",
        physical: "",
        goal_note: "",
        goal: ""
      }
    
    
  render() {
    console.log(this.state.wellbeing);
    return (
      <div className="App">
        <p>this is placeholder code for practice</p>

        <div>
          <Emotion timestamp={this.state.timestamp} emotion_note={this.state.emotion_note} emotion={this.state.emotion}  />
          <Physical timestamp={this.state.timestamp} physical_note={this.state.physical_note} physical={this.state.physical} />
          <PersonalGoal timestamp={this.state.timestamp} goal_note={this.state.goal_note} goal={this.state.goal}/>
        </div>

        <div className="submit">
          <button>Submit</button>
        </div>
      </div>
    );
  }
}

export default App;
