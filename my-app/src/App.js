import React from 'react';
import './App.css';
import AddNewBill from "./AddNewBill";
import List from "./List";

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
        <AddNewBill/>
        <List/>
      </div>
    );
  }
}


export default App;
