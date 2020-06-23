import React, { Component } from "react";

class TransactionsSum extends Component {
  
  render() {
    return (
      <tr>
        <td>Suma ({this.props.all})</td>
        <td>{this.props.euro}</td>
        <td>{(this.props.euro * this.props.pln).toFixed(2)}</td>
        <td style={{width: '10%'}}>&nbsp;</td>
      </tr>
    );
  }
}

export default TransactionsSum;
