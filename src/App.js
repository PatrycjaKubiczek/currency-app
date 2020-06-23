import React, {Component} from 'react';
import './App.sass';
import NewTransaction from "./component/NewTransaction/NewTransaction";
import TransactionItem from './component/TransactionItem/TransactionItem';
import TransactionsSum from "./component/TransactionsSum/TransactionsSum";
import TransactionHighest from "./component/TransactionHighest/TransactionHighest";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentpln: 4.45,
      transactionName: "",
      transactionEuro: undefined,
      transactions: [
        {
          transactionName: "wakacje",
          transactionEuro: 400,
        },
        { transactionName: "transakcja 1", transactionEuro: 40 },
        { transactionName: "obiad", transactionEuro: 15 },
      ],
    };
  }

  handleChangeCurrencyValue = (e) => {
    this.setState({ currentpln: e.target.value });
  };

  addTransaction = (e) => {
    e.preventDefault();
    this.setState({
      transactions: [
        {
          transactionName: this.state.transactionName,
          transactionEuro: this.state.transactionEuro,
        },
        ...this.state.transactions,
      ],
      transactionName: "",
      transactionEuro: 0,
    });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]:
        e.target.type === "number" ? parseInt(e.target.value) : e.target.value,
    });
  };

  removeTransaction = (id) => {
    let { transactions } = this.state;
    transactions.splice(id, 1);

    this.setState({ transactions: transactions });
  };

  render() {
    const {
      currentpln,
      transactions,
      transactionName,
      transactionEuro,
    } = this.state;
 
    let sumEuro = (transactions.length !== 0) ? 
      (transactions
      .map((item) => item.transactionEuro)
      .reduce((a, c) => {
        return a + c;
      }))
      : 0;

    let highestValue = 
    (transactions.length !== 0) ? 
    (transactions.reduce((prev, current) =>
      +prev.transactionEuro > +current.transactionEuro ? prev : current
    ))
    : undefined;

    return (
      <div className="App">
        <header className="App-header">
          <h1>Przelicznik walutowy</h1>
        </header>

        <div>
          <h3 className="title">Zdefiniuj obecny przelicznik walutowy</h3>
          <form>
            1 EURO =
            <input
              type="number"
              name="currentpln"
              min="0"
              step="0.01"
              value={currentpln}
              onChange={this.handleChangeCurrencyValue}
              placeholder="wpisz przelicznik"
              pattern="^\d+(?:\.\d{1,2})?$"
              className="input__pln"
            />
            PLN
          </form>

          <div>
            <h3 className="title">Dodaj nową trasakcję</h3>
            <NewTransaction
              name={transactionName}
              euro={transactionEuro}
              onchange={this.handleChange}
              handler={this.addTransaction}
            />
          </div>
        </div>
        <div className="transaction__wrapper">
          {transactions.length !== 0 ? (
            <div className="transaction__list">
              <h3 className="title">Lista obecnych transakcji walutowych</h3>
              <table>
                <thead>
                  <tr>
                    <th>Nazwa</th>
                    <th>kwota w euro</th>
                    <th>kwota w PLN</th>
                    <th>&nbsp;</th>
                  </tr>
                </thead>
              </table>
              <div className="transactionlist__table">
                <table>
                  <tbody>
                    {transactions.map((transaction, index) => (
                      <TransactionItem
                        transactionName={transaction.transactionName}
                        transactionEuro={transaction.transactionEuro}
                        currentpln={currentpln}
                        key={index}
                        transactionIndex={index}
                        remove={this.removeTransaction}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
              <div>
                <table>
                  <tbody>
                    {transactions.length !== 0 ? (
                      <TransactionsSum
                        all={transactions.length}
                        euro={sumEuro}
                        pln={currentpln}
                      />
                    ) : (
                      ""
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <h3 className="header__empty">Brak transakcji walutowych</h3>
          )}
          {highestValue ? (
            <div className="transaction__highest">
              <h3 className="title">Najwyższa transakcja</h3>
              <table>
                <tbody>
                  <TransactionHighest
                    name={highestValue.transactionName}
                    euro={highestValue.transactionEuro}
                    pln={currentpln}
                  />
                </tbody>
              </table>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default App;
