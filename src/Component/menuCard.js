import React from "react";
// import { Button, Card } from "react-bootstrap";
import MyCard from "./card";

const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map(number => <MyCard title={number} />);

class MenuCard extends React.Component {
  
  render() {
    return (
     
            <div className="card-columns">{listItems}</div>
    
          
    );
  }
}

export default MenuCard;