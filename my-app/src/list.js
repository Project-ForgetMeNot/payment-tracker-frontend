import React from 'react';

class List extends React.Component {
  render() {
    return (
      <table class="table table-hover table-dark">
        <thead>
          <tr class ="table-warning">
            <th scope="col">Bill Type</th>
            <th scope="col">Renewal Date</th>
            <th scope="col">Name of Bill Provider</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">INPUT DATA</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>Delete button here</td>

          </tr>
          <tr>
            <th scope="row">INPUT DATA</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>Delete button here</td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default List;