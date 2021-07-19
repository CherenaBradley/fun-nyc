import React, { Component } from 'react';
import axios from 'axios';



class App extends Component {
   constructor(props){
     super(props);
     this.state =  {
        projectData: [],
     };
   }


   componentDidMount(){
     fetch('http://localhost:8000/entertainment').then((res) => {
       this.setState({
         projectData: res.json()
       })
     }).then(res => {
      console.log(this.state.projectData)
     })
   }

  render(){
    const { projectData } = this.state;
    return(
      <div>
        <h1>HEY GURL I WORK I WORK</h1>
      </div>
    )
  }
}
export default App;