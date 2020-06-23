import React, { Component } from "react";
import "./TransactionHighest.sass";
class TransactionHighest extends Component {
  render() {
    return (
      <>
        <tr>
          <td>{this.props.name}</td>
          <td>{this.props.euro}</td>
          <td>{(this.props.euro * this.props.pln).toFixed(2)}</td>
          <td></td>
        </tr>
      </>
    );
  }
}

export default TransactionHighest;
