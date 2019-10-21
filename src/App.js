import React from 'react';
import './App.css';
import Card from './Card/Card';
import {robots} from './shared/robots';

const App = () => {
  return (
    <div>
      {
        robots.map((robot,i) => {
          return <Card 
                    key = {robot.id}
                    name= {robot.name} 
                    id={robot.id} 
                    email={robot.email}
                />
        })
      }
    </div>
  );
}

export default App;
