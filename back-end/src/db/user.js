const { faker } = require('@faker-js/faker');

const users = Array(100).fill({}).map((obj, index) => ({
    id: index + 1,
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    status: faker.lorem.sentence(),
    isFollow: faker.datatype.boolean(),
    avatar: {
      src: faker.image.avatar(),
      title: 'avatar',
    },
    address: {
      country: faker.address.country(),
      city: faker.address.city(),
    },
    get fullName() { return `${ this.firstName } ${ this.lastName }` },
  })
);

module.exports = users;