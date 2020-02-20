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

    updatesortOrderAsc = () => {
        this.props.sortOrderFn("asc");
    }

    updatesortOrderDesc = () => {
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
                                <th scope="col">Name of Bill Provider</th>
                                <th scope="col">Renewal Date <button onClick={this.updatesortOrderAsc}><i class="fas fa-sort-up"></i></button><button onClick={this.updatesortOrderDesc}><i class="fas fa-sort-down"></i></button></th>
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
