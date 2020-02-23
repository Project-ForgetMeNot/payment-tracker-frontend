import React from 'react';

class List extends React.Component {

    categories = (id) => {
        if (id) {
            return this.props.categoriesFunc(id);
        }
    }

    deleteBillFn = (id) => {
        this.props.deleteFunc(id);
    }

    updateSortOrderAsc = () => {
        this.props.sortOrderFn("asc");
    }

    updateSortOrderDesc = () => {
        this.props.sortOrderFn("desc");
    }

    render() {
        const bills = this.props.bills;

        return (
            <div className="container">
                <div className="table-responsive">
                    <table className="table table-striped table table-hover table table-sm">

                        <thead>
                            <tr>
                                <th scope="col">Bill Type</th>
                                <th scope="col">Provider</th>
                                <th scope="col">Renewal
                                <div className="float-right">
                                    <button
                                        onClick={this.updateSortOrderAsc}>
                                        <i className="fas fa-sort-up"></i>
                                    </button>
                                    <button
                                        onClick={this.updateSortOrderDesc}>
                                        <i className="fas fa-sort-down"></i>
                                    </button>
                                </div>
                                </th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bills.map((bill, index) => {
                                let thisCat = this.categories(bill.billType);
                                return <tr key={`bill-${bill.billId}`}>
                                    <th scope="row">
                                        <i className={thisCat.icon}></i> {thisCat.name}
                                    </th>

                                    <td>{bill.billProvider}</td>
                                    <td>{bill.renewalDate.split("T")[0]}</td>
                                    <td>
                                        <button
                                            type="button"
                                            onClick={() => this.deleteBillFn(bill.billId)}
                                            className="btn"
                                        >
                                            <i className="fa fa-trash"></i>
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