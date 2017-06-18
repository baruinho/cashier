class TransactionClient {
  post(accountId, transaction) {
    return fetch(`http://localhost:8081/api/v1/accounts/${accountId}/transactions`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(transaction)
      })
      .then(() => {});
  }

  put(accountId, transaction) {
    return fetch(`http://localhost:8081/api/v1/accounts/${accountId}/transactions/${transaction._id}`, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(transaction)
      })
      .then(() => {});
  }

  delete(accountId, transactionId) {
    return fetch(`http://localhost:8081/api/v1/accounts/${accountId}/transactions/${transactionId}`, {
      method: 'DELETE'
    })
    .then(() => {});
  }
}

class AccountClient {
  constructor() {
    this.transactions = new TransactionClient();
  }

  fetchData() {
    return fetch('http://localhost:8081/api/v1/accounts')
      .then(
        (response) =>
          response.status === 200 ? response.json() :
          response.status === 204 ? []              : null
      )
  }

  fetchBalance(accountId) {
    return fetch(`http://localhost:8081/api/v1/accounts/${accountId}/balance`)
      .then(
        (response) =>
          response.status === 200 ? response.json() : null
      );
  }

  post(account) {
    return fetch('http://localhost:8081/api/v1/accounts', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(account)
      })
      .then(() => {});
  }

  put(account) {
    return fetch(`http://localhost:8081/api/v1/accounts/${account._id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(account)
    });
  }

  remove(accountId) {
    return fetch(`http://localhost:8081/api/v1/accounts/${accountId}`, {
      method: 'DELETE'
    })
    .then(() => {});
  }
}

export default new AccountClient();
