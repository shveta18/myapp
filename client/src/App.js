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
        emotion: "",
        physical: ""
      }
    
    
  render() {
    console.log(this.state.wellbeing);
    return (
      <div className="App">
        <p>this is placeholder code for practice</p>

        <div>
          {/*push all state data to individual components*/}
          <Emotion timestamp={this.state.timestamp} emotion={this.state.emotion}  />
          <Physical timestamp={this.state.timestamp} physical={this.state.physical} />
        </div>

        <div className="submit">
          <button>Submit</button>
        </div>
      </div>
    );
  }
}

export default App;
