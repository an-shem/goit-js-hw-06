import users from './users.js';

console.log(`ЗАДАНИЕ - 1`);
// ----------1
const getUserNames = users =>
  users.reduce((acc, user) => {
    acc.push(user.name);
    return acc;
  }, []);

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

console.log(`ЗАДАНИЕ - 2`);
// ----------2
const getUsersWithEyeColor = (users, color) =>
  users.filter(user => user.eyeColor === color);

console.log(getUsersWithEyeColor(users, 'blue'));
// [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

console.log(`ЗАДАНИЕ - 3`);
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

console.log(`ЗАДАНИЕ - 4`);
// ----------4
const getInactiveUsers = users => users.filter(user => !user.isActive);

console.log(getInactiveUsers(users));
// [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

console.log(`ЗАДАНИЕ - 5`);
// ----------5
const getUserWithEmail = (users, email) =>
  users.find(user => user.email === email);

console.log(getUserWithEmail(users, 'shereeanthony@kog.com'));
// {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com'));
// {объект пользователя Elma Head}

console.log(`ЗАДАНИЕ - 6`);
// -----------6
const getUsersWithAge = (users, min, max) =>
  users.filter(user => user.age >= min && user.age <= max);

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

console.log(`ЗАДАНИЕ - 7`);
// -----------7
const calculateTotalBalance = users =>
  users.reduce((acc, user) => acc + user.balance, 0);

console.log(calculateTotalBalance(users)); // 20916

console.log(`ЗАДАНИЕ - 8`);
// -----------8
const getUsersWithFriend = (users, friendName) =>
  users.reduce((acc, user) => {
    if (user.friends.includes(friendName)) {
      acc.push(user.name);
    }
    return acc;
  }, []);

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]
