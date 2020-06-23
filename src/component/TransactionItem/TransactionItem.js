import React, { Component } from "react";
import "./TransactionItem.sass"; 

class TransactionItem extends Component {
  render() {
    return (
      <>
        <tr className="row__item">
          <td>{this.props.transactionName}</td>
          <td>{this.props.transactionEuro}</td>
          <td>
            {(this.props.transactionEuro * this.props.currentpln).toFixed(2)}
          </td>
          <td>
            <button
              onClick={() => this.props.remove(this.props.transactionIndex)}
              title="usuń"
              className="btn__remove"
            >
              x
            </button>
          </td>
        </tr>
      </>
    );
  }
}

export default TransactionItem;
