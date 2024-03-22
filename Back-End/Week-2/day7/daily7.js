const { fileURLToPath } = require("url");

const fetchUserdata = async () => {
  try {
    const response = await fetch(`https://dummyjson.com/users`);
    const res = await response.json();
    console.log("res : ", res);
    const resProcess = processUserData(res.users);
    console.log("resProcess ;", resProcess);
    const resToltalAge = summarizeAge(res.users);
    console.log("resTotalAge :", resToltalAge);
  } catch (error) {
    console.log(error.message);
  }
};
fetchUserdata();

const processUserData = (users) => {
  const filterUsers = users
    .filter((user) => user.gender === "male")
    // const mapUsers = users
    .map(
      (users) =>
        `Name: [${users.firstName} ${users.lastName}], Age: [${users.age}]`
    );
  //console.log(filterUsers);
  //   summarizeAge(filterUsers);
  summarizeAge(users);
  return filterUsers;
};

// const summarizeAge = (filterUsers) => {
//   const totalAge = filterUsers.reduce((acc, user) => acc + user.age,0);
//     console.log(totalAge);
const summarizeAge = (users) => {
  const maleUsers = users.filter((user) => user.gender === "male");
  const totalAge = maleUsers.reduce((acc, user) => acc + parseInt(user.age), 0);
  //console.log("total Age : ", totalAge);
  return totalAge;
};
