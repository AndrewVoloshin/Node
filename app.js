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
    const allBooks = await books.add({ title, author });
    console.log(allBooks, "allBooks");
  }
  if (action === "updateById") {
    const updateBook = await books.updateById(id, { title, author });
    console.log(updateBook, "updateBook");
  }
  if (action === "deleteById") {
    const deleteBook = await books.deleteById(id);
    console.log(deleteBook, "deleteBook");
  }
};

// invokeAction({ action: "read" });
// invokeAction({ action: "getById", id: '2' });
// invokeAction({ action: "add", title: "New title", author: "N. Author" });
// invokeAction({
//   action: "updateById",
//   id: "5",
//   title: "New title 5557777",
//   author: "Lorem i555psum dolor",
// });
invokeAction({ action: "deleteById", id: "4" });
