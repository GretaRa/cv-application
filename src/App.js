import { Component } from 'react';
import './style/App.css';
import General from './components/General';
import Education from './components/Education';
import Experience from './components/Experience';

class App extends Component {

  render(){
    return (
      <div className="cv-container">
        <div className='cv-content'>
          <h1>Create your CV</h1>
          <General />
          <Education />
          <Experience />
          <button className='form-button'>Print</button>
        </div>
      </div>
    )
  }
  
}

export default App;
