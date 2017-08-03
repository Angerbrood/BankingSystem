var userBankAccount = new function (id, accountNumber, accountType, ownerId, transactions) {
    this.id = id;
    this.accountNumber = accountNumber;
    this.accountType = accountType;
    this.ownerId = ownerId;
    this.transactions = transactions;
};

module.exports = userBankAccount;