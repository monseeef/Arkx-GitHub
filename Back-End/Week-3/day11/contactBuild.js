var events = require("events");
var eventEmitter = new events.EventEmitter();

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//let person = prompt("Please enter your name");

let contacts = [];

const addContacts = async () => {
  return new Promise((resolve, reject) => {
    rl.question(`Whats your name ? : `, (name) => {
      rl.question(`Whats your phone number : `, (phoneNumber) => {
        const contact = { name, phoneNumber };
        console.log(`${name} and your phone => ${phoneNumber}`);
        contacts.push(contact);
        console.log(`Contact ${name} added successfully!`, contact);
        keypad();
      });
    });
  });
};
const displayContact = () => {
  if (contacts.length !== 0) {
    contacts.forEach((contact) => {
      console.log(
        `- Name is : ${contact.name} , Phone number is : ${contact.phoneNumber}`
      );
    });
    keypad();
  } else {
    console.log(`Not Found`);
    keypad();
  }
};

const searchContact = async () => {
  return new Promise((resolve, reject) => {
    rl.question(`Enter the name to search : `, (byName) => {
      const foundContact = contacts.find((contact) => contact.name === byName);
      if (foundContact) {
        console.log(
          `Contact found => Name => ${foundContact.name} | Phone => ${foundContact.phoneNumber}`
        );
        keypad();
      } else {
        console.log(`Contact not found`);
        keypad();
      }
      resolve();
    });
  });
};

const keypad = async () => {
  console.log(`Add contact :       < 1 >`);
  console.log(`Display contact :   < 2 >`);
  console.log(`Search contact :    < 3 >`);
  console.log(`Exit contact :      < 4 >`);

  while (true) {
    key = await prompt("Choices: ");

    switch (key) {
      case "1":
        addContacts();
        break;
      case "2":
        displayContact();
        break;
      case "3":
        searchContact();
        break;
      case "4":
        console.log(`Exit`);
        rl.close();
        break;
      default:
        console.log(`Invalid choice`);
        keypad();
        break;
    }
  }
};
//
const prompt = (question) => {
  return new Promise((resolve, reject) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
};

keypad();

// (async () => {
//   await keypad();
// })();

// addContacts = () => {
//   rl.question("whats your name ?", (name) => {
//     rl.question("whats your phone number ? ", (phone) => {
//       contact = { name, phone };

//       contact.push(contact);
//       console.log("contact added");
//       promptAction();
//     });
//   });
//   return contact;
// };
// console.log(contact);

// displayContacts = (contact) => {
//   console.log("contact : ", contact);
//   return contact;
// };
// displayContacts(addContacts);

// const pormpt = (question) => {
//   return new Promise((resolve, reject) => {
//     fs.readFile(fp, "utf-8", (err, data) => {
//       if (err) {
//         reject(err.message);
//       } else {
//         resolve(data);
//       }
//     });
//   });
//   function promptAge() {
//     return new Promise(function (resolve, reject) {
//       let ask = function () {
//         rl.question("How old are you? ", function (answer) {
//           age = parseInt(answer);
//           if (age > 0) {
//             // internal ask() function still has access to resolve() from parent scope
//             resolve(age, reject);
//           }
//         });
//       };
//     });
//   }
// };
