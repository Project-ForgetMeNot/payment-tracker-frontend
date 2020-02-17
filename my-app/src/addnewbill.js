import React from 'react';


class AddNewBill extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            emailText: props.emailText,
            providerText: props.providerText,
            renewalDate: props.renewalDate,
            categories: props.categories
        }
    }

    componentWillReceiveProps(props) {
        this.setState({
            emailText: this.props.emailText,
            providerText: this.props.providerText,
            renewalDate: this.props.renewalDate
        });
    }

    updateEmailText = (event) => {
        this.setState({
            emailText: event.target.value
        });
    }

    updateProviderText = (event) => {
        this.setState({
            providerText: event.target.value
        });
    }

    updateRenewalDate = (event) => {
        this.setState({
            renewalDate: event.target.value
        });
    }

    render() {
        const cats = this.state.categories;
        
        return (
            <div className="container">
                <div className="AddForm card mb-5">
                    <div className="card-body">
                        <form>
                            <div className="form-row">
                            <div className="form-group col-md-6">
                                    <label htmlFor="exampleFormControlSelect1">Bill Type</label>
                                    <select className="form-control" id="exampleFormControlSelect1">
                                        {cats.map((value, index) => {
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
                                    value={this.state.renewalDate}
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
                                    onChange={this.updateProviderText}
                                    value={this.state.providerText}
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
                                        onChange={this.updateEmailText}
                                        value={this.state.emailText}
                                        className="form-control"
                                        placeholder="name@example.com"
                                    />
                                </div>
                            </div>

                            <button className="btn btn-primary btn-block">
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