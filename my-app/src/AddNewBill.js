import React from 'react';

class AddNewBill extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            billType: props.myFormFields.billType,
            emailAdd: props.myFormFields.emailAdd,
            billProvider: props.myFormFields.billProvider,
            renewalDate: props.myFormFields.renewalDate,
            categories: props.categories
        }
    }

    updateBillType = (event) => {
        this.setState({
            billType: event.target.value
        });
    }

    updateEmailAdd = (event) => {
        this.setState({
            emailAdd: event.target.value
        });
    }

    updateBillProvider = (event) => {
        this.setState({
            billProvider: event.target.value
        });
    }

    updateRenewalDate = (event) => {
        this.setState({
            renewalDate: event.target.value
        });
    }

    addNewBillFn = () => {
        this.props.addNewBillFunc(
            this.state.billType,
            this.state.renewalDate,
            this.state.billProvider,
            this.state.emailAdd
        );
    }

    render() {
        const myForm = this.state;
        const categoryList = this.state.categories;
        
        return (
            <div className="container">
                <div className="AddForm card mb-5">
                    <div className="card-body">
                        <form>
                            <div className="form-row">
                            <div className="form-group col-md-6">
                                    <label 
                                    htmlFor="exampleFormControlSelect1">Bill Type</label>
                                    <select 
                                        className="form-control" 
                                        id="exampleFormControlSelect1"
                                        onChange={this.updateBillType}
                                        value={myForm.billType}
                                    >
                                        <option>Select a category</option>
                                        {categoryList.map((value, index) => {
                                            return <option value={value.id} key={index}>{value.name}</option>
                                        })}
                                    </select>
                                </div>
                                <div className="form-group col-md-6">
                                <label htmlFor="renewalDateInput">Renewal Date</label>
                                <input
                                    id="renewalDateInput"
                                    type="date"
                                    onChange={this.updateRenewalDate}
                                    value={myForm.renewalDate}
                                    className="form-control"
                                />
                            </div>
                            </div>

                            
                            <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="nameOfBillProviderInput">Name of Bill Provider</label>
                                <input
                                    id="nameOfBillProviderInput"
                                    type="text"
                                    onChange={this.updateBillProvider}
                                    value={myForm.billProvider}
                                    className="form-control"
                                    placeholder="Type company here"
                                    autoComplete="off"
                                />
                            </div>
                            <div className="form-group col-md-6">
                                    <label htmlFor="emailInput">Email address</label>
                                    <input
                                        id="emailInput"
                                        type="email"
                                        onChange={this.updateEmailAdd}
                                        value={myForm.emailAdd}
                                        className="form-control"
                                        placeholder="name@example.com"
                                    />
                                </div>
                            </div>
                            <button 
                            type="button"
                            onClick={() => this.addNewBillFn()}
                            className="btn btn-primary btn-block">
                                Add
                            </button>
                        </form>
                    </div>
                </div>
            </div >
        )
    }
}

export default AddNewBill;    
