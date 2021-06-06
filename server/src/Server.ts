import fastify from "fastify";
import apiRoute from "./routes/api";

export default class Server {
  app = fastify({ logger: true });

  constructor() {
    this.setup();
  }

  setup() {
    this.app.register(apiRoute, { prefix: "api" });
  }

  start() {
    return this.app.listen(4000);
  }
}
