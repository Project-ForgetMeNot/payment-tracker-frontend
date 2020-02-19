import React from 'react';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bills: props.bills
        }
    }


    UNSAFE_componentWillReceiveProps(props) {
        this.setState({
            bills: props.bills
        });
    }


    categories = (id) => {
        if(id){
            return this.props.categoriesFunc(id);
        }
    }

    deleteBillFn = (id) => {

        //set state//
        this.props.deleteFunc(id);
    }

    render() {
        const bills = this.state.bills;

        return (
            <div className="container">
                <div className="table-responsive">
                    <table className="table table-striped table table-hover table table-sm">
                        
                        <thead>
                            <tr>
                                <th scope="col">Bill Type</th>
                                <th scope="col">Renewal Date</th>
                                <th scope="col">Name of Bill Provider</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bills.map((bill, index) => {
                                const thisCat = this.categories(bill.billType);
                    
                                return <tr key={index}>
                                    <th scope="row">
                                    <i className={thisCat.icon}></i> {thisCat.name}
                                    </th>
                                    <td>{bill.renewalDate.split("T")[0]}</td>
                                    <td>{bill.billProvider}</td>
                                    <td>
                                        <button 
                                        type="button"
                                        onClick={() => this.deleteBillFn(bill.billId)}
                                        className="btn"
                                        >
                                        <i className="fa fa-trash"></i>(#{bill.billId})
                                    </button>
                                    </td>
                                </tr>
                            })}
                        </tbody>
                        
                    </table>
                </div>
            </div>
        )
    }
}

export default List;
