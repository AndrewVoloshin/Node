const { log } = require("console");
const fs = require("fs/promises");
const path = require("path");

const getAll = async () => {
  const data = await fs.readFile(path.join(__dirname, "listbooks.json"));
  const books = JSON.parse(data);
  return books;
};

const getById = async (id) => {
  const books = await getAll();
  const book = books.find((book) => book.id === id);
  return book || null;
};

const add = async (data) => {
  console.log(data, "data");
};

module.exports = {
  getAll,
  getById,
  add,
};
