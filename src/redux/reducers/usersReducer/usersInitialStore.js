export default {
  offset: 0,
  limit: 4,
  showMore: 4,
  users: [
    {
      id: 1,
      firstName: 'Dmitry',
      lastName: 'K',
      status: 'Bla bla bla',
      isFollow: false,
      avatar: {
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRqRyIiwYCq4s-fZi1zdmyfSuIPUvg9EyZ_Q&usqp=CAU',
        title: 'avatar',
      },
      address: {
        country: 'Belarus',
        city: 'Minsk',
      },
      get fullName() { return `${ this.firstName } ${ this.lastName }` },
    },
    {
      id: 2,
      firstName: 'Svetlana',
      lastName: 'D',
      status: 'Bla bla bla',
      isFollow: false,
      avatar: {
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRqRyIiwYCq4s-fZi1zdmyfSuIPUvg9EyZ_Q&usqp=CAU',
        title: 'avatar',
      },
      address: {
        country: 'Belarus',
        city: 'Minsk',
      },
      get fullName() { return `${ this.firstName } ${ this.lastName }` },
    },
    {
      id: 3,
      firstName: 'Sergey',
      lastName: 'S',
      status: 'Bla bla bla',
      isFollow: false,
      avatar: {
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRqRyIiwYCq4s-fZi1zdmyfSuIPUvg9EyZ_Q&usqp=CAU',
        title: 'avatar',
      },
      address: {
        country: 'Ukraine',
        city: 'Kiev',
      },
      get fullName() { return `${ this.firstName } ${ this.lastName }` },
    },
    {
      id: 4,
      firstName: 'Andrew',
      lastName: 'T',
      status: 'Bla bla bla',
      isFollow: false,
      avatar: {
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRqRyIiwYCq4s-fZi1zdmyfSuIPUvg9EyZ_Q&usqp=CAU',
        title: 'avatar',
      },
      address: {
        country: 'United States',
        city: 'Philadelphia',
      },
      get fullName() { return `${ this.firstName } ${ this.lastName }` },
    },
    {
      id: 5,
      firstName: 'Bogdan',
      lastName: 'B',
      status: 'Bla bla bla',
      isFollow: false,
      avatar: {
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRqRyIiwYCq4s-fZi1zdmyfSuIPUvg9EyZ_Q&usqp=CAU',
        title: 'avatar',
      },
      address: {
        country: 'Ukraine',
        city: 'Kharkov',
      },
      get fullName() { return `${ this.firstName } ${ this.lastName }` },
    },
    {
      id: 6,
      firstName: 'Dmitry',
      lastName: 'N',
      status: 'Bla bla bla',
      isFollow: false,
      avatar: {
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRqRyIiwYCq4s-fZi1zdmyfSuIPUvg9EyZ_Q&usqp=CAU',
        title: 'avatar',
      },
      address: {
        country: 'Ukraine',
        city: 'Kharkov',
      },
      get fullName() { return `${ this.firstName } ${ this.lastName }` },
    },
    {
      id: 7,
      firstName: 'Vlada',
      lastName: 'B',
      status: 'Bla bla bla',
      isFollow: false,
      avatar: {
        src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRqRyIiwYCq4s-fZi1zdmyfSuIPUvg9EyZ_Q&usqp=CAU',
        title: 'avatar',
      },
      address: {
        country: 'Ukraine',
        city: 'Kharkov',
      },
      get fullName() { return `${ this.firstName } ${ this.lastName }` },
    },
  ]
};