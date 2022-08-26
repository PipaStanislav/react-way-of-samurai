const setMetaData = require('../../libs/set-meta-data');

let { users } = require('../../db');

class UserService {
  createUser(data) {
    const newUser = { ...data, id: users.length + 1 };
    users.push(newUser);

    return { newUser };
  }

  getUsers({ offset = 0, limit = 10 }) {
    return setMetaData({ data: users.slice(offset, limit), totalCount: users.length });
  }

  getUser(data) {
    const user = users.find(({ id }) => id === Number(data.id));

    return user ? user : { error: 'User not exist' };
  }

  updateUser({ id, ...data }) {
    users.forEach((user, index) => {
      if (user.id === Number(id)) {
        users[index] = { ...user, ...data }
      }
    })

    return this.getUser({ id });
  }

  deleteUser(data) {
    users = users.filter(({ id }) => id !== Number(data.id))

    return true;
  }
}

module.exports = new UserService();