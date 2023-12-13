const fs = require("fs/promises");
const path = require("path");

const getAll = async () => {
  const data = await fs.readFile(path.join(__dirname, "listbooks.json"));
  const books = JSON.parse(data);
  return books;
};

const getById = async () => {
  console.log("here getById");
};

module.exports = {
  getAll,
  getById,
};
