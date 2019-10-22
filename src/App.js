import React, { Component } from 'react';
import './App.css';
import CardList from './CardList/CardList';
import {robots} from './shared/robots';
import SearchBox from './SearchBox/SearchBox';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      robots: robots,
      searchfield: ''
    };
  }

  onSearchChange = (event) => {
    const searchInput = event.target.value;
    this.setState({
      searchfield: searchInput
    });
    // console.log(this.state.searchfield);
  }


  render() {
    const filteredRobots = this.state.robots.filter(robot =>{
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    });

    return (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
