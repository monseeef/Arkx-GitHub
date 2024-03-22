const readline = require("readline");

const EventEmitter = require("events");

const event = new EventEmitter();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const contacts = [];

const prompt = (question) => {
  return new Promise((resolve, reject) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
};

event.on("add", async (Name, PhoneNumber) => {
  console.log("Add event satrt");
  try {
    Name = await prompt("Give your name : ");
    PhoneNumber = await prompt("Enter your phone number : ");
    const contact = { Name, PhoneNumber };
    contacts.push(contact);
    console.log("Contact added successfuly !");
    processContacts();
  } catch (error) {
    console.log(error);
  }
});

event.on("search", async (Name) => {
  console.log("Search event satrt");
  try {
    Name = await prompt("Please give the name searching for : ");
    const foundContact = contacts.find((contact) => contact.Name == Name);
    if (foundContact.length == 0) {
      console.log("Contact not found !");
      processContacts();
    } else {
      console.log(foundContact);
      processContacts();
    }
  } catch (error) {
    console.log(error);
  }
});

event.on("display", () => {
  console.log("display event satrt");
  try {
    if (contacts.length == 0) {
      console.log("the list is empty");
      processContacts();
    } else {
      console.log(contacts);
      processContacts();
    }
  } catch (error) {
    console.log(error);
  }
});

event.on("menu", () => {
  console.log(`1- Add contact`);
  console.log(`2- Search for a contact by name`);
  console.log(`3- Display the contact list.`);
  console.log(`4- Exit`);
});

event.on("exit", () => {
  rl.close();
  console.log("Application is closed !");
});

const processContacts = async () => {
  event.emit("menu");
  let check = true;
  while (check == true) {
    let choose = await prompt("Choose Somthing :");
    switch (choose.toLowerCase()) {
      case "1":
        event.emit("add");
        break;
      case "2":
        event.emit("search");
        break;
      case "3":
        event.emit("display");
        break;
      case "4":
        event.emit("exit");
        check = false;
        break;
      default:
        console.log("Your choice is wrong !!");
        break;
    }
  }
};

processContacts();
