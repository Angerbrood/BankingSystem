var transaction = new function (id, payerId, payeeId, amount, type, description, status, created) {
  this.id = id;
  this.payerId = payerId;
  this.payeeId = payeeId;
  this.amount = amount;
  this.type = type;
  this.description = description;
  this.status = status;
  this.created = created;
};

module.exports = transaction;