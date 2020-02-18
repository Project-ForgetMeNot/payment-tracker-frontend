import React from 'react';
import axios from 'axios';
import './App.css';
import Header from './Header';
import AddNewBill from "./AddNewBill";
import List from './List';
import CategoryButtons from './CategoryButtons';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      billList: [],
      formFields: {
        billType: "",
        renewalDate: "",
        billProvider: "",
        emailAdd: ""
      }
    }
  }


  componentDidMount() {
    axios.get("https://0w2rty5zca.execute-api.eu-west-1.amazonaws.com/dev/bills")
      .then((response) => {
        const bills = response.data.bills;

        this.setState({
          billList: bills
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }

  addNewBill = (category, date, name, email) => {
    const billList = this.state.billList;

    const newBill = {
      billType: category,
      renewalDate: date,
      billProvider: name,
      emailAdd: email,
      userId: this.getUserId()
    }

    axios.post("https://0w2rty5zca.execute-api.eu-west-1.amazonaws.com/dev/bills", newBill)
    .then((response) => {
      const copyOfBills = billList;
      
      newBill.billId = response.data.bill.billId;
      
      copyOfBills.slice();
      copyOfBills.push(newBill);
      this.setState({
        billList: copyOfBills
      });

      this.resetForm()

    })
    .catch((err) => {
      console.log(err);
    });
  }

  resetForm = () => {
    const myForm = {
      billType: "",
      renewalDate: "",
      billProvider: "",
      emailAdd: ""
    }
    this.setState({
      formFields: myForm
    })
  }

  categories = (id) => {
    const cats = [
      { id: 1, name: 'Automotive', icon: 'fas fa-car' },
      { id: 2, name: 'Home', icon: 'fas fa-home' },
      { id: 4, name: 'Insurance', icon: 'fas fa-car-crash' },
      { id: 5, name: 'Phone', icon: 'fas fa-phone' },
      { id: 6, name: 'Broadband', icon: 'fas fa-wifi' },
      { id: 7, name: 'Others', icon: 'fa fa-search' }
    ];
    return cats;
  }

  getUserId = () => {
    return 1
  }

  render() {
    const cats = this.categories();
    const myFormFields = this.state.formFields;
    const myBillList = this.state.billList;

    return (
      <div className="App">
        <Header />
        <AddNewBill
          addNewBillFunc={this.addNewBill}
          myFormFields={myFormFields}
          categories={cats}
        />
        <CategoryButtons categories={cats} />
        <List
          bills={myBillList}
        />

      </div>
    );
  }
}


export default App;
