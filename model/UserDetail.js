var userDetail = new function (id, name, address, city, email, dateOfBirth) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.city = city;
    this.email = email;
    this.dateOfBirth = dateOfBirth;
};

module.exports = userDetail;