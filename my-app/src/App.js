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

  categories = (id) => {
    const cats = [
      { id:7, name:'Others', icon:'fa fa-search'},
      { id:1, name:'Automotive', icon:'fas fa-car'},
      { id:2, name:'Home', icon:'fas fa-home'},
      { id:4, name:'Insurance', icon:'fas fa-car-crash'},
      { id:5, name:'Phone', icon:'fas fa-phone'},
      { id:6, name:'Broadband', icon:'fas fa-wifi'},
      
    ];
    return cats;
  }

  render() {
    const cats = this.categories();
    return (
      <div className="App">
        <Header/>
        <AddNewBill categories={cats}/>
        <CategoryButtons categories={cats}/>
        <List/>
      </div>
    );
  }
}


export default App;
