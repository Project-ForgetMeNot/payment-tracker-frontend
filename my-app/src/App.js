import React from 'react';
import './App.css';
import Header from './Header';
import AddNewBill from "./AddNewBill";
import List from './List';
import CategoryButtons from './CategoryButtons';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      AddNewBill: {
        emailText:"",
        providerText:"",
        renewalDate: "" 
      }
    }  
  }
  render() {
    return (
      <div className="App">
        <Header/>
        <AddNewBill/>
        <CategoryButtons/>
        <List/>
      </div>
    );
  }
}


export default App;
