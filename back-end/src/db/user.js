const { faker } = require('@faker-js/faker');

const users = Array(100).fill({}).map((obj, index) => ({
    id: index + 1,
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    status: faker.lorem.sentence(),
    avatar: {
      small: {
        src: faker.image.image(320, 240),
        title: 'small'
      },
      large: {
        src: faker.image.avatar(640, 480),
        title: 'large'
      },
    },
    address: {
      country: faker.address.country(),
      city: faker.address.city(),
    },
    get fullName() { return `${ this.firstName } ${ this.lastName }` },
  })
);

module.exports = users;