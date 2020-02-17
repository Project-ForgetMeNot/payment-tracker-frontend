import React from 'react';

class List extends React.Component {
  render() {
    return (

      <div class="table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Bill Type</th>
              <th scope="col">Renewal Date</th>
              <th scope="col">Name of Bill Provider</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Cell</td>
              <td>Cell</td>
              <td><button class="btn"><i class="fa fa-trash"></i></button></td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Cell</td>
              <td>Cell</td>
              <td><button class="btn"><i class="fa fa-trash"></i></button></td>

            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Cell</td>
              <td>Cell</td>
              <td><button class="btn"><i class="fa fa-trash"></i></button></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default List;