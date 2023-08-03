import React from 'react'

const Table = ({details}) => {
  return (
    <div>
          <table>
              <thead>
                  <th>Invoice Number</th>
                  <th>Invoice Date</th>
                  <th>Invoice Amount</th>
              </thead>
              <tbody>
                  {details.map((each, index) => (
                      <tr key=''>
                          <td>''</td>
                          <td></td>
                          <td>''</td>
                          <td>
                              <button
                                  className="delete-btn"
                                //   onClick={() => deleteInvoice(each.id)}
                              >
                                  Delete
                              </button>
                          </td>
                      </tr>
                  ))}
              </tbody>
          </table>
    </div>
  )
}

export default Table