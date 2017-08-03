var userAuthenticaton = new function (id, username, password, role, enabled) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.role = role;
    this.enabled = enabled;

};

module.exports = userAuthenticaton;