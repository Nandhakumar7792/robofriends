import React, { Component } from 'react';
import './App.css';
import CardList from './CardList/CardList';
import SearchBox from './SearchBox/SearchBox';
import Scroll from './Scroll/Scroll';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      robots: [],
      searchfield: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users/')
      .then(response => response.json())
      .then(users => this.setState({ robots: users }));
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

    if(this.state.robots.length === 0){
      return <h1>Loading</h1>
    }
    else {
      return (
        <div className="tc">
          <h1 className="f1">RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
    }
  }
}

export default App;
