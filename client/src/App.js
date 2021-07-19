import React, { Component } from 'react';
import ListItem from '../componets/List Item/ListItem';
import axios from 'axios';



class App extends Component {
   constructor(props){
     super(props);
     this.state =  {
        projectData: [],
        test: "I am test data"
     };
   }


   componentDidMount(){
     fetch('http://localhost:8000/entertainment')
     .then((res) => res.json())
     .then(data => { 
       console.log(data.businesses[0])
       this.setState({
         projectData: data.businesses[0]
       })
     })
   }

  render(){
    const { projectData,test } = this.state;   
    return(
      <div>
        <h1>HEY GURL I WORK I WORK</h1>
        <ListItem projectData={projectData}/>
      </div>
    )
  }
}
export default App;