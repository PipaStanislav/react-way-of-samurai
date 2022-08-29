const { faker } = require('@faker-js/faker');

const users = require('./user');

const profiles = users.map(({ id, firstName, lastName, fullName }) => {
  const userName = faker.internet.userName(firstName, lastName);

  return {
    aboutMe: faker.lorem.sentence(),
    contacts: {
      facebook: `https://facebook.com/${ userName }`,
      website: faker.internet.url(),
      instagram: `https://instagram.com/${ userName }`,
      github: `https://github.com/${ userName }`,
    },
    lookingForAJob: faker.datatype.boolean(),
    lookingForAJobDescription: faker.lorem.sentences(),
    fullName,
    userId: id,
    photos: {
      small: {
        src: faker.image.image(320, 240),
        title: 'small'
      },
      large: {
        src: faker.image.avatar(640, 480),
        title: 'large'
      },
    },
  }
});

module.exports = profiles;