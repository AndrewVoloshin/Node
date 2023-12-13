const books = require("./books");

const invokeAction = async ({ action, id, title, author }) => {
  if (action === "read") {
    const allBooks = await books.getAll();
    console.log(allBooks,'allBook');

  }
};



invokeAction({action:"read"})