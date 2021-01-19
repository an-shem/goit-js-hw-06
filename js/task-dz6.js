import users from './users.js';
// ----------1
const getUserNames = users =>
  users.reduce((acc, user) => {
    acc.push(user.name);
    return acc;
  }, []);

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// ----------2
const getUsersWithEyeColor = (users, color) =>
  users.filter(user => user.eyeColor === color);

console.log(getUsersWithEyeColor(users, 'blue'));
// [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

// -----------3
// const getUsersWithGender = (users, gender) =>
//   users
//     .filter(user => user.gender === gender)
//     .reduce((acc, item) => {
//       acc.push(item.name);
//       return acc;
//     }, []);

const getUsersWithGender = (users, gender) =>
  users.reduce((acc, user) => {
    if (user.gender === gender) {
      acc.push(user.name);
    }
    return acc;
  }, []);

console.log(getUsersWithGender(users, 'male'));
// [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// ----------4
const getInactiveUsers = users => users.filter(user => !user.isActive);

console.log(getInactiveUsers(users));
// [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]
