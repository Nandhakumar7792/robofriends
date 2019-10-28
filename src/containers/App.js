import React, { Component } from 'react';
import './App.css';
import CardList from '../components/CardList/CardList'
import SearchBox from '../components/SearchBox/SearchBox';
import Scroll from '../components/Scroll/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

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
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    return (!robots.length) ?
      <h1>Loading</h1> :
      (
        <div className="tc">
          <h1 className="f1">RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <ErrorBoundary>
              <CardList robots={filteredRobots} />
            </ErrorBoundary>
          </Scroll>
        </div>
      );
  }
}

export default App;
