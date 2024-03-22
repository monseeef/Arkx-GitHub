const mongoose = require("mongoose");
const cron = require("node-cron");

mongoose.connect("mongodb://localhost:27017/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//! Define a Schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

//! Use the Model:
const dataUsers = [
  {
    name: "Mons",
    email: "mons@gmail.com",
    age: 27,
  },
  {
    name: "Ismail",
    email: "ismail@gmail.com",
    age: 22,
  },
  {
    name: "Killua",
    email: "killua@gmail.com",
    age: 17,
  },
];
//! Create a Model:
const User = new mongoose.model("User", userSchema);

// Create and save each user to the database
const createNewUser = async () => {
  await dataUsers.forEach((userData) => {
    new User(userData)
      .save()
      .then((user) => {
        console.log("🟢🟢🟢 ~ User created succesfully: ", user);
      })
      .catch((err) => {
        console.log("🚀🚀🚀~ Error creating user: ", err);
      });
  });
};
// * Creating a new user: *
// const newUser = new User({
//   name: "Mons",
//   email: "mons@gmail.com",
//   age: 27,
// });

// newUser
//   .save()
//   .then((user) => {
//     console.log("🚀 ~ User created succesfully: ", user);
//   })
//   .catch((err) => {
//     console.log("🚀 ~ Error creating user: ", err);
//   });

// * Fetching users: *
const fetchUsers = async () =>
  await User.find({})
    .then((users) => {
      console.log("🟢🟢🟢 Fetched users: ", users);
    })
    .catch((err) => {
      console.log("🚀🚀🚀 ~ Error fetching users: ", err.message);
    });

// * Finding a user:
const findUser = async (name) => {
  try {
    const user = await User.findOne({ name: name });
    if (user) {
      console.log("🟢🟢🟢~ findUser ~ user:", user);
    } else {
      console.log("findUser : 🚀🚀🚀 No user found  ");
    }
  } catch (error) {
    console.log("🚀🚀🚀 ~ findUser ~ error:", error);
  }
};

// * Updating a user:
const updateUserEmail = async (name, email) => {
  try {
    const updateUser = await User.findOneAndUpdate(
      { name },
      { email: email },
      { new: true }
    );
    if (updateUser) {
      console.log("🟢🟢🟢 ~ updateUser ~ user:", updateUser);
    } else {
      console.log("🚀🚀🚀 No user found  ");
    }
  } catch (error) {
    console.log("🚀🚀🚀 ~ updateUserEmail ~ error:", error);
  }
};
cron.schedule("0 0 * * *", async () => {
  console.log("Running deleteUser cron job...");
  const oneWeekAgo = new Date(Date.now() - 10000); // Calculate one week ago
  await deleteUser(oneWeekAgo);
});

// * Deleting a user
const deleteUser = async (date) => {
  try {
    const res = await User.deleteMany({ createdAt: { $lt: date } });
    if (res) {
      console.log("🟢🟢🟢 ~ Number of deleting users ~ :", res.deletedCount);
    }
  } catch (error) {
    console.log("🚀🚀🚀 ~ deleteUser ~ error:", error);
  }
};

// (async () => {
//   await createNewUser();
//   fetchUsers();
//   findUser("Mons");
//   updateUserEmail("Ismail", "is@gmail.com");
//   deleteUser(new Date(Date.now() - 60000));
// })();
// deleteUser(new Date(Date.now() - 60000));
