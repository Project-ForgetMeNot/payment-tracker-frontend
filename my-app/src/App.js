import React from 'react';
import './App.css';
import AddNewBill from "./AddNewBill";
import Header from "./Header";
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
        <Header/>
        <AddNewBill/>
        <List/>
      </div>
    );
  }
}


export default App;
