const books = require("./books");

const invokeAction = async ({ action, id, title, author }) => {
  if (action === "read") {
    const allBooks = await books.getAll();
    console.log(allBooks, "allBook");
  }
  if (action === "getById") {
    const findBook = await books.getById(id);
    console.log(findBook, "findBook");
  }
  if (action === "add") {
    books.add({title, author} );
  }
};

// invokeAction({ action: "read" });
// invokeAction({ action: "getById", id: '2' });
invokeAction({ action: "add", title: "New title", author: "N. Author" });
