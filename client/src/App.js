import React, { Component } from 'react';
import ListItem from '../componets/List Item/ListItem';
import './App.scss'



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
         projectData: data.businesses
       })
     })
   }

  render(){
    const { projectData,test } = this.state;   
    return(
      <div>
        <h1>HEY GURL I WORK I WORK</h1>
        <div className="container">
        {
          projectData.map(data => (
            <ListItem data={data}/>
          ))
        }
        </div>
        
        
      </div>
    )
  }
}
export default App;