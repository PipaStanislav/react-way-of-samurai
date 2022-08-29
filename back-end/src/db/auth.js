const { faker } = require('@faker-js/faker');

const users = require('./user');

const auth = users.map(({ id, firstName, lastName }, index) => {
  const userName = faker.internet.userName(firstName, lastName);

  return {
    id: index + 1,
    email: faker.internet.email(firstName, lastName),
    userId: id,
    login: userName,
    password: '1234567890'
  }
});

module.exports = auth;