import React, { Component } from 'react';
import ListItem from '../componets/List Item/ListItem';
import SearchBox from '../componets/SearchBox/SearchBox';
import LocalDropDown from '../componets/LocationFilter.js/LocalDropDrown';
import filteredBorough from './utils/filterBorough';
import searchTerm from './utils/searchTerm';
import './App.scss'



class App extends Component {
   constructor(props){
     super(props);
     this.state =  {
        projectData: [],
        query: '',
        borough: ''
     };
     this.handleSearch = this.handleSearch.bind(this);
     this.handleLocalSelection = this.handleLocalSelection.bind(this);
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

   handleLocalSelection(event){
     this.setState({
       borough: event.target.value,
     })
     console.log(event.target.value)
   }

  render(){
    const { projectData,borough, query } = this.state; 
    const newData = searchTerm(projectData,query); 
    
    return(
      <div>
        <h1>Yay I work</h1>
        <div className="filters">
          <SearchBox handleSearch={this.handleSearch} />
          <LocalDropDown handleLocalSelection={this.handleLocalSelection}/>
        </div>
        
        <div className="container">
        {
          newData.map(data => (
            <ListItem data={data}/>
          ))
        }
        </div>
      </div>
    )
  }
}
export default App;