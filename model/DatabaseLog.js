var databaseLog = new function (id, activity, userId, details, date) {
    this.id = id;
    this.activity = activity;
    this.userId = userId;
    this.details = details;
    this.date = date;
};

module.exports = databaseLog;