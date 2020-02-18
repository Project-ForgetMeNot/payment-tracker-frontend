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

    render() {
        const bills = this.state.bills;

        return (

            <div className="table-responsive">
                <table className="table">
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
                            return <tr key={index}>
                                <th scope="row">{bill.billType}</th>
                                <td>{bill.renewalDate.split("T")[0]}</td>
                                <td>{bill.billProvider}</td>
                                <td>
                                    <button className="btn">
                                        <i className="fa fa-trash"></i>(#{bill.billId})
                                    </button>
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default List;