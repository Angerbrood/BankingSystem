var userId = new function (id, userAuthentication, userBankAccount, userDetail) {
    this.id = id;
    this.userAuthentication = userAuthentication;
    this.userBankAccount = userBankAccount;
    this.userDetail = userDetail;
};

module.exports = userId;