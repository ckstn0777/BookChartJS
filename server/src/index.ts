import "reflect-metadata";
import { createConnection } from "typeorm";
import Server from "./Server";

createConnection()
  .then(async (connection) => {
    const server = new Server();
    await server.start();

    // console.log("Inserting a new user into the database...");
    // const book = new Book();

    // console.log("Loading users from the database...");
    // const books = await connection.manager.find(Book);
    // console.log("Loaded users: ", books);
  })
  .catch((error) => console.log(error));
