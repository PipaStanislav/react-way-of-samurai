import { faker } from '@faker-js/faker';

const getUsers = ({ offset, limit }) => {
  return Array(limit).fill({}).map((obj, index) => ({
    id: index + offset + 1,
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
  }))
}

export default { getUsers };