const express = require("express");
const app = express();
const phonesData = require("../phones.json");
const fs = require("fs");

app.use(express.json());

exports.getPhone = (req, res) => {
  res.json(phonesData);
};

exports.createPhone = (req, res) => {
  const newPhone = req.body;
  phonesData.push(newPhone);

  fs.writeFile(phonesData, JSON.stringify(phonesData), (err) => {
    if (err) {
      res.status(500).json({ message: "An Error Has Accured" });
    } else {
      res.status(200).json(newPhone);
    }
  });
};

exports.getPhoneById = (req, res) => {
  const id = req.params.id;
  const target = phonesData.find((phone) => phone.id == id);
  if (target) {
    res.json(target);
  } else {
    res.status(404).json({ message: "Phone Not Found" });
  }
};

exports.updatePhoneById = (req, res) => {
  let target = phonesData.find((p) => p.id == req.params.id);
  if (!target) {
    res.status(404).json({ message: "Phone Not found" });
    return;
  }
  let newPhone = { ...target, ...req.body };
  let index = phonesData.indexOf(target);
  phonesData[index] = newPhone;
  fs.writeFile(phonesData, JSON.stringify(phonesData), (err) => {
    if (err) {
      res.status(500).json({ message: "An Error Has Accured" });
    } else {
      res.json(phonesData);
    }
  });
};
exports.deletePhoneById = (req, res) => {
  let target = phonesData.findIndex((phone) => phone.id == req.params.id);
  if (target === -1) {
    res.status(404).json({ message: "it is no phone to delete" });
    return;
  }
  phonesData.splice(target, 1);
  res.status(200).json(`Phone deleted`);
};
