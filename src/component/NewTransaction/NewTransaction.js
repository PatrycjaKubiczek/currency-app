import React, { Component } from "react";
import './NewTransaction.sass'; 

class TransactionHighest extends Component {
    
  render() {
    return (
      <>
        <form
          className="form__transaction"
          action=""
          onSubmit={this.props.handler}
        >
          <label htmlFor="" className="label__transaction">
            nazwa transakcji
            <input
              name="transactionName"
              type="text"
              placeholder="wpisz nazwę"
              onChange={this.props.onchange || ""}
              value={this.props.name}
              required
              className="input__transaction"
            />
          </label>

          <label className="label__transaction">
            kwota w euro
            <input
              name="transactionEuro"
              type="number"
              min="0"
              value={this.props.euro || 0}
              placeholder="wpisz kwotę"
              onChange={this.props.onchange}
              step="0.01"
              pattern="^\d+(?:\.\d{1,2})?$"
              required
              className="input__transaction"
            />
          </label>
          <input
            type="submit"
            className="input__send"
            value="dodaj transakcję"
          />
        </form>
      </>
    );
  }
}

export default TransactionHighest;
