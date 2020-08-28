import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Wellbeing from './components/Wellbeing';

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
    console.log(this.state.emotion);
    console.log(this.state.physical);
    return (
      <div className="App">
        <div>
          Enter how you feel today

          <Wellbeing />
          
        </div>

      </div>
    );
  }
}

export default App;
