let { users } = require('../../db');

class UserService {
  createUser(data) {
    const newUser = { ...data, id: users.length + 1 };
    users.push(newUser);

    return newUser;
  }

  getUsers(data) {
    return users.slice(data.offset, data.limit);
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