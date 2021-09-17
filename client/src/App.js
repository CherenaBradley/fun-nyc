import React, { Component } from 'react';
import ListItem from '../componets/List Item/ListItem';
import SearchBox from '../componets/SearchBox/SearchBox';
import searchTerm from './utils/searchTerm';
import './App.scss'



class App extends Component {
   constructor(props){
     super(props);
     this.state =  {
        projectData: [],
        query: '',
     };
     this.handleSearch = this.handleSearch.bind(this);
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
   
   handleSearch(event){
     this.setState({
       query: event.target.value,
     })
    console.log(event.target.value)
   }

  

  render(){
    const { projectData, query } = this.state; 
    const newData = searchTerm(projectData,query);
    const dataLength = newData.dataLength;
    console.log(dataLength)
    let showData;
    if((dataLength == 0) ){
      showData =<div> <h5>No search resutls with that term</h5></div>

    } else {
      
      showData = <div className="container">
      {
        newData.map(data => (
          <ListItem data={data}/>
        ))
      }
      </div>
    }
    
    return(
      <div>
        <h1>Yay I work</h1>
        <div className="filters">
          <SearchBox handleSearch={this.handleSearch} />
          
        </div>
        {showData}
        
        
      </div>
    )
  }
}
export default App;