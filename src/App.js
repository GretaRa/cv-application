import { Component } from 'react';
import './style/App.css';
import General from './components/General';
import Education from './components/Education';
import Experience from './components/Experience';

class App extends Component {
  // constructor(props){
  //   super(props)

  //   this.state={
  //     status: 'empty'
  //   }
    
  // }

  


  render(){
    // const {status} = this.state;
    // // const {answer, setAnswer} = this.setState({status: ''})

    // if (status === 'success') {
    //   return <h1>'Success'</h1>
    // }
    // if (status === 'submitted'){
    //   return (<>
    //     <h1>Name</h1>
    //     <h1>Surname</h1>
    //   </>)
    // }

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
